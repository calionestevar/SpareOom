import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadFromGate, sendThroughGate } from '../../services/stargate/dhd';
import { APP_CONFIG } from '../../constants/narnia/deepMagic';
import { KindredSpirit, AvonleaLesson } from '../../models/anne/lakeOfShiningWaters';

const PantryContext = createContext();

export const usePantry = () => {
  const context = useContext(PantryContext);
  if (!context) {
    throw new Error('usePantry must be used within PantryProvider');
  }
  return context;
};

export const PantryProvider = ({ children }) => {
  const [kindredSpirits, setKindredSpirits] = useState([]);
  const [lessons, setLessons] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Load data on mount
  useEffect(() => {
    const loadData = async () => {
      const childrenData = await loadFromGate(APP_CONFIG.STORAGE_KEYS.CHILDREN);
      const lessonsData = await loadFromGate(APP_CONFIG.STORAGE_KEYS.LESSONS);

      if (childrenData) {
        setKindredSpirits(childrenData);
      }
      if (lessonsData) {
        // Transform lessons from Firebase format
        const lessonsByDate = {};
        lessonsData.forEach(lesson => {
          const { date, ...lessonData } = lesson;
          if (!lessonsByDate[date]) {
            lessonsByDate[date] = [];
          }
          lessonsByDate[date].push(lessonData);
        });
        setLessons(lessonsByDate);
      }
      setIsLoading(false);
    };
    loadData();
  }, []);

  // Save children whenever they change
  useEffect(() => {
    if (!isLoading && kindredSpirits.length >= 0) {
      sendThroughGate(APP_CONFIG.STORAGE_KEYS.CHILDREN, kindredSpirits);
    }
  }, [kindredSpirits, isLoading]);

  // Save lessons whenever they change
  useEffect(() => {
    if (!isLoading) {
      sendThroughGate(APP_CONFIG.STORAGE_KEYS.LESSONS, lessons);
    }
  }, [lessons, isLoading]);

  const addKindredSpirit = (name) => {
    const newChild = new KindredSpirit(name);
    setKindredSpirits([...kindredSpirits, newChild]);
    return newChild;
  };

  const removeKindredSpirit = (childId) => {
    setKindredSpirits(kindredSpirits.filter(c => c.id !== childId));
    
    // Remove all lessons for this child
    const newLessons = { ...lessons };
    Object.keys(newLessons).forEach(date => {
      newLessons[date] = newLessons[date].filter(l => l.childId !== childId);
    });
    setLessons(newLessons);
  };

  const addLesson = (childId, subject, description, date) => {
    const newLesson = new AvonleaLesson(childId, subject, description, date);
    const dateKey = date;
    
    setLessons({
      ...lessons,
      [dateKey]: [...(lessons[dateKey] || []), newLesson]
    });
    return newLesson;
  };

  const toggleLessonComplete = (date, lessonId) => {
    const updatedLessons = { ...lessons };
    updatedLessons[date] = updatedLessons[date].map(lesson =>
      lesson.id === lessonId ? { ...lesson, completed: !lesson.completed } : lesson
    );
    setLessons(updatedLessons);
  };

  const deleteLesson = (date, lessonId) => {
    const updatedLessons = { ...lessons };
    updatedLessons[date] = updatedLessons[date].filter(lesson => lesson.id !== lessonId);
    setLessons(updatedLessons);
  };

  const getLessonsForDay = (date, childId = null) => {
    const dayLessons = lessons[date] || [];
    if (childId) {
      return dayLessons.filter(l => l.childId === childId);
    }
    return dayLessons;
  };

  const value = {
    kindredSpirits,
    lessons,
    isLoading,
    addKindredSpirit,
    removeKindredSpirit,
    addLesson,
    toggleLessonComplete,
    deleteLesson,
    getLessonsForDay
  };

  return (
    <PantryContext.Provider value={value}>
      {children}
    </PantryContext.Provider>
  );
};