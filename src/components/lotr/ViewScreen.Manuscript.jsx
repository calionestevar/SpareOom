/**
 * ViewScreen.Manuscript - LOTR Theme
 * 
 * Daily quest checklist with parchment and medieval styling.
 * Uses shared logic from utils.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Plus, Check, X, Scroll, Feather } from 'lucide-react';
import { usePantry } from '../../context/littlehouse/pantry';
import { useTheme } from '../../context/littlehouse/themeContext';

// Shared logic
import { formatDisplayDate, formatDate } from '../../utils/lotr/shire';

// Shared components
import PADD from '../shared/PADD';

const ViewScreenManuscript = ({ selectedDay, onBack }) => {
  const { kindredSpirits, getLessonsForDay, toggleLessonComplete, deleteLesson } = usePantry();
  const { theme } = useTheme();
  const [showAddLesson, setShowAddLesson] = useState(false);

  if (!selectedDay) return null;

  const dateKey = formatDate(selectedDay);
  const dayLessons = getLessonsForDay(selectedDay);
  const groupedByChild = kindredSpirits.map(child => ({
    child,
    lessons: dayLessons.filter(l => l.childId === child.id)
  }));

  // Subject color mapping (medieval tones)
  const getSubjectColor = (subject) => {
    const colors = {
      'Math': 'from-blue-700 to-blue-800',
      'Reading': 'from-green-700 to-green-800',
      'Writing': 'from-purple-700 to-purple-800',
      'Science': 'from-orange-700 to-orange-800',
      'History': 'from-red-700 to-red-800',
      'Art': 'from-pink-700 to-pink-800',
      'Music': 'from-indigo-700 to-indigo-800',
      'Other': 'from-gray-700 to-gray-800',
    };
    return colors[subject] || colors['Other'];
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D97706' fill-opacity='0.03'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-lg p-6 border-4 border-double border-amber-700 shadow-2xl"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' result='noise'/%3E%3CfeDiffuseLighting in='noise' lighting-color='%23F5E6D3' surfaceScale='2'%3E%3CfeDistantLight azimuth='45' elevation='60'/%3E%3C/feDiffuseLighting%3E%3C/filter%3E%3C/defs%3E%3Crect width='100' height='100' filter='url(%23paper)' opacity='0.3'/%3E%3C/svg%3E")`,
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.2)'
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-amber-700">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-amber-100 border-2 border-amber-700 text-amber-900 hover:bg-amber-200 font-semibold transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
              <span style={{ fontFamily: theme.fonts.secondary }}>Return to Quest Log</span>
            </motion.button>
            
            <h2 
              className="text-2xl font-bold text-amber-900 flex items-center gap-2"
              style={{ 
                fontFamily: theme.fonts.primary,
                textShadow: '2px 2px 0px rgba(217, 119, 6, 0.2)'
              }}
            >
              <Scroll className="w-6 h-6" />
              {formatDisplayDate(selectedDay, 'long')}
            </h2>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAddLesson(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-br from-amber-600 to-orange-700 border-2 border-amber-800 text-white hover:shadow-lg font-semibold transition-all"
            >
              <Plus className="w-5 h-5" />
              <span style={{ fontFamily: theme.fonts.secondary }}>New Quest</span>
            </motion.button>
          </div>

          {/* Quest lists by fellowship member */}
          <div className="space-y-6">
            {groupedByChild.map(({ child, lessons: childLessons }, index) => (
              <motion.div
                key={child.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-4 border-2 border-amber-600"
              >
                <h3 
                  className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2"
                  style={{ fontFamily: theme.fonts.primary }}
                >
                  <Feather className="w-5 h-5" />
                  {child.name}'s Quests
                </h3>
                
                {childLessons.length === 0 ? (
                  <p 
                    className="text-amber-700 italic ml-8"
                    style={{ fontFamily: theme.fonts.accent }}
                  >
                    No quests scheduled for this day
                  </p>
                ) : (
                  <div className="space-y-2">
                    <AnimatePresence>
                      {childLessons.map((lesson, lessonIndex) => (
                        <motion.div
                          key={lesson.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95, x: -100 }}
                          transition={{ delay: lessonIndex * 0.05 }}
                          className={`
                            flex items-center gap-3 p-3 rounded-md border-2 transition-all
                            ${lesson.completed 
                              ? 'bg-green-100 border-green-600 shadow-inner' 
                              : 'bg-white border-amber-400 shadow-md hover:shadow-lg'
                            }
                          `}
                        >
                          {/* Checkbox */}
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => toggleLessonComplete(dateKey, lesson.id)}
                            className={`
                              w-7 h-7 rounded border-2 flex items-center justify-center flex-shrink-0
                              ${lesson.completed
                                ? 'bg-gradient-to-br from-green-600 to-green-700 border-green-700'
                                : 'border-amber-600 hover:border-amber-700 bg-amber-50'
                              }
                            `}
                          >
                            {lesson.completed && <Check className="w-5 h-5 text-white" strokeWidth={3} />}
                          </motion.button>

                          {/* Quest content */}
                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span 
                                className={`
                                  px-3 py-1 rounded-full text-sm font-bold text-white
                                  bg-gradient-to-r ${getSubjectColor(lesson.subject)}
                                  shadow-md
                                `}
                              >
                                {lesson.subject}
                              </span>
                              {lesson.completed && (
                                <span className="text-green-700 font-bold text-sm flex items-center gap-1">
                                  <Check className="w-4 h-4" />
                                  Quest Complete
                                </span>
                              )}
                            </div>
                            {lesson.description && (
                              <p 
                                className={`text-gray-700 mt-1 ${lesson.completed ? 'line-through opacity-60' : ''}`}
                                style={{ fontFamily: theme.fonts.body }}
                              >
                                {lesson.description}
                              </p>
                            )}
                          </div>

                          {/* Delete button */}
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => deleteLesson(dateKey, lesson.id)}
                            className="text-red-600 hover:text-red-800 p-2 rounded hover:bg-red-100 transition-all"
                            title="Remove quest"
                          >
                            <X className="w-5 h-5" />
                          </motion.button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Decorative footer quote */}
          <div className="mt-6 pt-4 border-t-2 border-amber-700 text-center">
            <p 
              className="text-amber-700 italic text-sm"
              style={{ fontFamily: theme.fonts.accent }}
            >
              "Even the smallest quest can change the course of the future"
            </p>
          </div>
        </motion.div>
      </div>

      {showAddLesson && (
        <PADD 
          isOpen={showAddLesson} 
          onClose={() => setShowAddLesson(false)} 
          initialDate={dateKey}
        />
      )}
    </div>
  );
};

export default ViewScreenManuscript;