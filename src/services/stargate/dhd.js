import { 
  collection, 
  doc, 
  getDocs, 
  setDoc, 
  deleteDoc,
  query,
  orderBy 
} from 'firebase/firestore';
import { db, getFamilyId } from './firebase';

// Storage service - the "Dial Home Device" for accessing stored data via Firebase

export const loadFromGate = async (key) => {
  try {
    const familyId = getFamilyId();
    const collectionRef = collection(db, 'families', familyId, key);
    const q = query(collectionRef, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    
    return data.length > 0 ? data : null;
  } catch (error) {
    console.log(`No data found for key: ${key}`, error);
    return null;
  }
};

export const sendThroughGate = async (key, data) => {
  try {
    const familyId = getFamilyId();
    const collectionRef = collection(db, 'families', familyId, key);
    
    // Clear existing data
    const querySnapshot = await getDocs(collectionRef);
    const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
    
    // Add new data
    if (Array.isArray(data)) {
      const addPromises = data.map(item => {
        const docRef = doc(collectionRef, item.id);
        return setDoc(docRef, { ...item, createdAt: new Date() });
      });
      await Promise.all(addPromises);
    } else {
      // Handle lessons object (keyed by date)
      const addPromises = Object.entries(data).flatMap(([date, lessons]) =>
        lessons.map(lesson => {
          const docRef = doc(collectionRef, lesson.id);
          return setDoc(docRef, { ...lesson, date, createdAt: new Date() });
        })
      );
      await Promise.all(addPromises);
    }
    
    return true;
  } catch (error) {
    console.error(`Failed to store data for key: ${key}`, error);
    return false;
  }
};

export const clearGate = async (key) => {
  try {
    const familyId = getFamilyId();
    const collectionRef = collection(db, 'families', familyId, key);
    const querySnapshot = await getDocs(collectionRef);
    
    const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
    
    return true;
  } catch (error) {
    console.error(`Failed to delete data for key: ${key}`, error);
    return false;
  }
};

// Transform Firebase data back to app format
export const transformFromFirebase = (data, dataType) => {
  if (!data) return dataType === 'lessons' ? {} : [];
  
  if (dataType === 'lessons') {
    // Group lessons by date
    const lessonsByDate = {};
    data.forEach(lesson => {
      const { date, ...lessonData } = lesson;
      if (!lessonsByDate[date]) {
        lessonsByDate[date] = [];
      }
      lessonsByDate[date].push(lessonData);
    });
    return lessonsByDate;
  }
  
  return data;
};