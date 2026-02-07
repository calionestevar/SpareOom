import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Generate or retrieve family ID
export const getFamilyId = () => {
  let familyId = localStorage.getItem("spare-oom-family-id");
  if (!familyId) {
    // Generate a unique family ID
    familyId = `family_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem("spare-oom-family-id", familyId);
  }
  return familyId;
};
