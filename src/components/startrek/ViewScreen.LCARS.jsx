import React, { useState } from 'react';
import { ChevronLeft, Plus, Check, X } from 'lucide-react';
import { usePantry } from '../../context/littlehouse/pantry';
import { formatDisplayDate } from '../../utils/lotr/shire';
import { getSubjectColor } from '../../constants/narnia/cairParavel';
import PADD from '../shared/PADD';

const ViewScreen = ({ selectedDay, onBack }) => {
  const { kindredSpirits, getLessonsForDay, toggleLessonComplete, deleteLesson } = usePantry();
  const [showAddLesson, setShowAddLesson] = useState(false);

  if (!selectedDay) return null;

  const dateKey = selectedDay.toISOString().split('T')[0];
  const dayLessons = getLessonsForDay(dateKey);
  
  const groupedByChild = kindredSpirits.map(child => ({
    child,
    lessons: dayLessons.filter(l => l.childId === child.id)
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="flex items-center text-indigo-600 hover:text-indigo-800"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Week
            </button>
            <h2 className="text-2xl font-bold text-gray-800">
              {formatDisplayDate(selectedDay)}
            </h2>
            <button
              onClick={() => setShowAddLesson(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Lesson
            </button>
          </div>

          {groupedByChild.map(({ child, lessons: childLessons }) => (
            <div key={child.id} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">{child.name}</h3>
              {childLessons.length === 0 ? (
                <p className="text-gray-400 italic ml-4">No lessons scheduled</p>
              ) : (
                <div className="space-y-2">
                  {childLessons.map(lesson => (
                    <div
                      key={lesson.id}
                      className={`flex items-center gap-3 p-3 rounded-lg border-2 ${
                        lesson.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
                      }`}
                    >
                      <button
                        onClick={() => toggleLessonComplete(dateKey, lesson.id)}
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                          lesson.completed
                            ? 'bg-green-500 border-green-500'
                            : 'border-gray-300 hover:border-indigo-400'
                        }`}
                        aria-label={`Mark ${lesson.subject} as ${lesson.completed ? 'incomplete' : 'complete'}`}
                      >
                        {lesson.completed && <Check className="w-4 h-4 text-white" />}
                      </button>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded text-sm font-medium ${getSubjectColor(lesson.subject)}`}>
                            {lesson.subject}
                          </span>
                          {lesson.completed && <span className="text-green-600 text-sm font-medium">✓ Complete</span>}
                        </div>
                        {lesson.description && (
                          <p className="text-gray-600 mt-1">{lesson.description}</p>
                        )}
                      </div>
                      <button
                        onClick={() => deleteLesson(dateKey, lesson.id)}
                        className="text-red-400 hover:text-red-600 flex-shrink-0"
                        aria-label={`Delete ${lesson.subject} lesson`}
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <PADD 
        isOpen={showAddLesson} 
        onClose={() => setShowAddLesson(false)} 
        initialDate={dateKey}
      />
    </div>
  );
};

export default ViewScreen;