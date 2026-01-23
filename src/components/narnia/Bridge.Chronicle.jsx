import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { usePantry } from '../../context/littlehouse/pantry';
import { useTheme } from '../../context/littlehouse/themeContext';
import { getWeekDays, navigateWeek, formatDate } from '../../utils/lotr/shire';
import { getSubjectColor } from '../../constants/narnia/cairParavel';

// Narnia-Style Bridge (Magical Storybook Aesthetic)
const NarniaBridge = ({ onDayClick, onYearView }) => {
  const { kindredSpirits, getLessonsForDay } = usePantry();
  const { theme } = useTheme();
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const weekDays = getWeekDays(currentWeek);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8"
      style={{ fontFamily: theme.fonts.primary }}
    >
      {/* Magical Header - Like Opening a Storybook */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 rounded-3xl p-8 shadow-2xl border-4 border-double border-amber-500">
          {/* Decorative corner ornaments */}
          <div className="absolute top-4 left-4 text-6xl text-amber-400 opacity-30">❄</div>
          <div className="absolute top-4 right-4 text-6xl text-amber-400 opacity-30">❄</div>
          <div className="absolute bottom-4 left-4 text-4xl text-amber-400 opacity-30">🦁</div>
          <div className="absolute bottom-4 right-4 text-4xl text-amber-400 opacity-30">🕯</div>

          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
              <h1 
                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 tracking-wider drop-shadow-lg"
                style={{ fontFamily: theme.fonts.accent }}
              >
                Chronicle of Learning
              </h1>
              <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
            </div>
            <p className="text-amber-100 text-lg italic" style={{ fontFamily: theme.fonts.secondary }}>
              "Once a learner in Narnia, always a learner"
            </p>
          </div>
        </div>
      </div>

      {/* Week Navigation - Like turning pages */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl border-4 border-double border-indigo-300 p-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentWeek(navigateWeek(currentWeek, -1))}
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold">Previous Week</span>
            </button>

            <div className="text-center">
              <div className="text-sm text-indigo-600 font-semibold uppercase tracking-widest mb-1">
                The Week of
              </div>
              <div className="text-3xl font-bold text-indigo-900" style={{ fontFamily: theme.fonts.accent }}>
                {weekDays[0].toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - {weekDays[4].toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
            </div>

            <button
              onClick={() => setCurrentWeek(navigateWeek(currentWeek, 1))}
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="font-bold">Next Week</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Students as "Characters in the Story" */}
      <div className="max-w-7xl mx-auto space-y-8">
        {kindredSpirits.map((child, idx) => (
          <div 
            key={child.id}
            className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl border-4 border-double border-indigo-200 overflow-hidden"
          >
            {/* Character Header */}
            <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-100 p-6 border-b-4 border-double border-indigo-300">
              <div className="flex items-center gap-4">
                {/* Ornate Initial */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-xl border-4 border-amber-400">
                  <span 
                    className="text-4xl font-bold text-white"
                    style={{ fontFamily: theme.fonts.accent }}
                  >
                    {child.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-sm text-indigo-600 uppercase tracking-widest font-semibold">
                    Kindred Spirit
                  </div>
                  <h2 
                    className="text-3xl font-bold text-indigo-900"
                    style={{ fontFamily: theme.fonts.primary }}
                  >
                    {child.name}
                  </h2>
                </div>
                <div className="ml-auto flex gap-2">
                  <span className="text-4xl opacity-20">❄</span>
                  <span className="text-4xl opacity-20">✨</span>
                </div>
              </div>
            </div>

            {/* Week Grid - Like pages in a book */}
            <div className="p-6">
              <div className="grid grid-cols-5 gap-4">
                {weekDays.map((day) => {
                  const dateKey = formatDate(day);
                  const dayLessons = getLessonsForDay(dateKey, child.id);
                  const completedCount = dayLessons.filter(l => l.completed).length;
                  const totalCount = dayLessons.length;
                  const isToday = formatDate(new Date()) === dateKey;

                  return (
                    <button
                      key={day.toISOString()}
                      onClick={() => onDayClick(day)}
                      className={`
                        relative group
                        bg-gradient-to-br from-indigo-50 to-purple-50
                        rounded-2xl p-4 min-h-[160px]
                        border-2 ${isToday ? 'border-amber-400 shadow-lg shadow-amber-200' : 'border-indigo-200'}
                        hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-200
                        hover:-translate-y-1
                        transition-all duration-300
                      `}
                    >
                      {/* Magical corner decoration */}
                      {isToday && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                      )}

                      {/* Day Header */}
                      <div className="text-center mb-3">
                        <div className={`text-xs uppercase tracking-widest font-bold ${isToday ? 'text-amber-600' : 'text-indigo-600'}`}>
                          {day.toLocaleDateString('en-US', { weekday: 'long' })}
                        </div>
                        <div 
                          className={`text-4xl font-bold ${isToday ? 'text-amber-700' : 'text-indigo-900'}`}
                          style={{ fontFamily: theme.fonts.accent }}
                        >
                          {day.getDate()}
                        </div>
                      </div>

                      {/* Lessons as "Adventures" */}
                      <div className="space-y-2">
                        {dayLessons.slice(0, 3).map((lesson) => (
                          <div
                            key={lesson.id}
                            className={`
                              text-xs px-3 py-1.5 rounded-full font-semibold
                              ${lesson.completed 
                                ? 'bg-green-100 text-green-700 line-through opacity-60' 
                                : getSubjectColor(lesson.subject)}
                              shadow-sm
                            `}
                          >
                            {lesson.subject}
                          </div>
                        ))}
                        {dayLessons.length > 3 && (
                          <div className="text-xs text-indigo-600 font-semibold text-center">
                            +{dayLessons.length - 3} more
                          </div>
                        )}
                      </div>

                      {/* Progress Badge */}
                      {totalCount > 0 && (
                        <div className="absolute bottom-3 right-3">
                          <div className={`
                            px-2 py-1 rounded-full text-xs font-bold
                            ${completedCount === totalCount 
                              ? 'bg-green-500 text-white' 
                              : 'bg-indigo-200 text-indigo-900'}
                            shadow-md
                          `}>
                            {completedCount}/{totalCount}
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Magical Footer */}
      <div className="max-w-7xl mx-auto mt-8">
        <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 rounded-2xl p-6 text-center shadow-2xl border-2 border-amber-400">
          <p className="text-amber-200 italic text-lg" style={{ fontFamily: theme.fonts.accent }}>
            "Further up and further in, always learning, always growing"
          </p>
          <div className="flex items-center justify-center gap-6 mt-4 text-sm text-amber-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Synced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Free Forever</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NarniaBridge;