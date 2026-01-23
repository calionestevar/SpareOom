import React, { useState } from 'react';
import { Copy, Calendar } from 'lucide-react';
import { usePantry } from '../../context/littlehouse/pantry';
import { getWeekDays, formatDate } from '../../utils/lotr/shire';

const WeekCopier = ({ isOpen, onClose, sourceWeek }) => {
  const { getLessonsForDay, addLesson } = usePantry();
  const [targetDate, setTargetDate] = useState('');
  const [numberOfWeeks, setNumberOfWeeks] = useState(1);
  const [skipWeekends, setSkipWeekends] = useState(true);

  if (!isOpen) return null;

  const sourceWeekDays = getWeekDays(sourceWeek);
  const sourceLessons = sourceWeekDays.map(day => ({
    date: day,
    lessons: getLessonsForDay(formatDate(day))
  }));

  const totalLessons = sourceLessons.reduce((sum, day) => sum + day.lessons.length, 0);

  const handleCopy = () => {
    if (!targetDate) return;

    const target = new Date(targetDate);
    
    for (let weekOffset = 0; weekOffset < numberOfWeeks; weekOffset++) {
      const weekStart = new Date(target);
      weekStart.setDate(weekStart.getDate() + (weekOffset * 7));
      
      const targetWeekDays = getWeekDays(weekStart);
      
      sourceLessons.forEach((sourceDay, dayIndex) => {
        const targetDay = targetWeekDays[dayIndex];
        const isWeekend = targetDay.getDay() === 0 || targetDay.getDay() === 6;
        
        if (skipWeekends && isWeekend) return;
        
        sourceDay.lessons.forEach(lesson => {
          addLesson(
            lesson.childId,
            lesson.subject,
            lesson.description,
            formatDate(targetDay)
          );
        });
      });
    }

    onClose();
  };

  const getTargetWeekPreview = () => {
    if (!targetDate) return null;
    const target = new Date(targetDate);
    const weekDays = getWeekDays(target);
    return `${formatDate(weekDays[0])} to ${formatDate(weekDays[4])}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex items-center gap-2 mb-4">
          <Copy className="w-6 h-6 text-indigo-600" />
          <h3 className="text-xl font-bold">Copy Week</h3>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-sm text-blue-900 mb-2">Source Week</h4>
          <p className="text-sm text-blue-700">
            {formatDate(sourceWeekDays[0])} to {formatDate(sourceWeekDays[4])}
          </p>
          <p className="text-sm text-blue-600 mt-1">
            {totalLessons} lesson{totalLessons !== 1 ? 's' : ''} will be copied
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Copy to week starting:
            </label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full border-2 border-gray-200 rounded-lg px-3 py-2"
            />
            {targetDate && (
              <p className="text-xs text-gray-600 mt-1">
                Week: {getTargetWeekPreview()}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Number of weeks to copy:
            </label>
            <input
              type="number"
              min="1"
              max="52"
              value={numberOfWeeks}
              onChange={(e) => setNumberOfWeeks(parseInt(e.target.value) || 1)}
              className="w-full border-2 border-gray-200 rounded-lg px-3 py-2"
            />
            <p className="text-xs text-gray-600 mt-1">
              Copy this week's lessons to {numberOfWeeks} consecutive week{numberOfWeeks !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="skipWeekends"
              checked={skipWeekends}
              onChange={(e) => setSkipWeekends(e.target.checked)}
              className="rounded"
            />
            <label htmlFor="skipWeekends" className="text-sm">
              Skip weekends (Saturday & Sunday)
            </label>
          </div>

          {targetDate && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-800">
                This will create <strong>{totalLessons * numberOfWeeks}</strong> new lessons
                across <strong>{numberOfWeeks}</strong> week{numberOfWeeks !== 1 ? 's' : ''}
              </p>
            </div>
          )}
        </div>

        <div className="flex gap-2 mt-6">
          <button
            onClick={handleCopy}
            disabled={!targetDate}
            className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Copy className="w-4 h-4" />
            Copy Lessons
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeekCopier;