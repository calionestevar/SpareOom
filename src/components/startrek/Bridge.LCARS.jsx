import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePantry } from '../../context/littlehouse/pantry';
import { useTheme } from '../../context/littlehouse/themeContext';
import { getWeekDays, navigateWeek, formatDate } from '../../utils/lotr/shire';
import { getSubjectColor } from '../../constants/narnia/cairParavel';

// LCARS-Style Bridge Interface (Star Trek TNG Aesthetic)
const LCARSBridge = ({ onDayClick, onYearView }) => {
  const { kindredSpirits, getLessonsForDay } = usePantry();
  const { theme } = useTheme();
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const weekDays = getWeekDays(currentWeek);

  // LCARS Color Scheme
  const lcarsColors = {
    orange: '#FF9966',
    purple: '#CC99CC', 
    blue: '#9999FF',
    peach: '#FFCC99',
    red: '#CC6666',
    background: '#000000',
    text: '#FFCC99'
  };

  return (
    <div className="min-h-screen bg-black text-orange-200 p-0 font-['Michroma']">
      {/* LCARS Header Bar */}
      <div className="flex items-stretch h-24 gap-2">
        {/* Left Corner Piece */}
        <div className="bg-gradient-to-b from-purple-400 to-purple-500 rounded-br-[80px] w-32"></div>
        
        {/* Main Header */}
        <div className="flex-1 flex items-center gap-2">
          <div className="bg-gradient-to-b from-orange-400 to-orange-500 rounded-full h-12 px-8 flex items-center">
            <span className="text-black font-black text-xl tracking-widest">ACADEMY LOGS</span>
          </div>
          <div className="bg-gradient-to-b from-blue-400 to-blue-500 rounded-full h-10 px-6 flex items-center">
            <span className="text-black font-bold text-sm tracking-wider">STARDATE {new Date().getFullYear()}.{String(new Date().getMonth() + 1).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Right Corner Piece */}
        <div className="bg-gradient-to-b from-purple-400 to-purple-500 rounded-bl-[80px] w-32"></div>
      </div>

      {/* Main Interface */}
      <div className="flex gap-4 p-4 h-[calc(100vh-120px)]">
        {/* Left LCARS Panel */}
        <div className="w-20 flex flex-col gap-2">
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-r-full h-16 flex items-center justify-end pr-4">
            <button 
              onClick={() => setCurrentWeek(navigateWeek(currentWeek, -1))}
              className="text-black hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-r-full h-12"></div>
          <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-r-full h-12"></div>
          <div className="flex-1 bg-gradient-to-r from-orange-300 to-orange-400 rounded-r-full"></div>
          <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-r-full h-12"></div>
        </div>

        {/* Center Content Area */}
        <div className="flex-1 bg-slate-900/50 rounded-3xl border-4 border-blue-400/30 p-6 overflow-auto">
          {/* Week Navigation */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-orange-400/20 to-transparent border-l-8 border-orange-400 rounded-r-full p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-orange-400 text-xs tracking-widest font-black">MISSION TIMEFRAME</div>
                  <div className="text-2xl font-black tracking-wide text-orange-200">
                    WEEK {weekDays[0].toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })} - {weekDays[4].toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}
                  </div>
                </div>
                <button
                  onClick={onYearView}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-black px-6 py-3 rounded-full uppercase tracking-wider hover:scale-105 transition-transform"
                >
                  ▲ YEAR SCAN
                </button>
              </div>
            </div>
          </div>

          {/* Crew Roster (Students) */}
          <div className="space-y-4">
            {kindredSpirits.map((child, idx) => (
              <div key={child.id} className="mb-6">
                {/* Crew Member Header */}
                <div className="bg-gradient-to-r from-purple-500/30 to-transparent border-l-8 border-purple-400 rounded-r-full p-3 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-black font-black text-xl">
                      {child.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-purple-300 text-xs tracking-widest font-black">CREW MEMBER {String(idx + 1).padStart(3, '0')}</div>
                      <div className="text-xl font-black tracking-wide text-purple-100">{child.name.toUpperCase()}</div>
                    </div>
                  </div>
                </div>

                {/* Mission Schedule Grid */}
                <div className="grid grid-cols-5 gap-2">
                  {weekDays.map((day, dayIdx) => {
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
                          relative overflow-hidden
                          bg-gradient-to-br from-slate-800 to-slate-900
                          border-2 ${isToday ? 'border-orange-400' : 'border-blue-400/30'}
                          ${isToday ? 'shadow-lg shadow-orange-400/50' : ''}
                          hover:border-cyan-400 hover:shadow-cyan-400/50
                          rounded-lg p-3 transition-all duration-200
                          min-h-[120px]
                        `}
                      >
                        {/* Day Header */}
                        <div className={`text-xs tracking-widest font-black mb-2 ${isToday ? 'text-orange-400' : 'text-blue-300'}`}>
                          {day.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}
                        </div>
                        <div className={`text-2xl font-black mb-2 ${isToday ? 'text-orange-200' : 'text-blue-100'}`}>
                          {day.getDate()}
                        </div>

                        {/* Mission Objectives */}
                        <div className="space-y-1">
                          {dayLessons.slice(0, 2).map((lesson, idx) => (
                            <div
                              key={lesson.id}
                              className={`
                                text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wide
                                ${lesson.completed 
                                  ? 'bg-green-500/30 text-green-300 line-through' 
                                  : 'bg-cyan-500/30 text-cyan-300'
                                }
                              `}
                            >
                              {lesson.subject}
                            </div>
                          ))}
                          {dayLessons.length > 2 && (
                            <div className="text-[10px] text-blue-400 font-bold">
                              +{dayLessons.length - 2} MORE
                            </div>
                          )}
                        </div>

                        {/* Status Indicator */}
                        {totalCount > 0 && (
                          <div className="absolute bottom-2 right-2">
                            <div className={`
                              text-[10px] font-black px-2 py-1 rounded-full
                              ${completedCount === totalCount 
                                ? 'bg-green-500 text-black' 
                                : 'bg-orange-500 text-black'}
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
            ))}
          </div>

          {/* System Status Footer */}
          <div className="mt-6 flex gap-2 text-xs">
            <div className="bg-green-500/20 border-l-4 border-green-500 px-4 py-2 rounded-r-lg">
              <span className="text-green-400 font-black tracking-wider">SYSTEMS ONLINE</span>
            </div>
            <div className="bg-blue-500/20 border-l-4 border-blue-500 px-4 py-2 rounded-r-lg">
              <span className="text-blue-400 font-black tracking-wider">DATA SYNCED</span>
            </div>
            <div className="bg-purple-500/20 border-l-4 border-purple-500 px-4 py-2 rounded-r-lg">
              <span className="text-purple-400 font-black tracking-wider">READY STATUS</span>
            </div>
          </div>
        </div>

        {/* Right LCARS Panel */}
        <div className="w-20 flex flex-col gap-2">
          <div className="bg-gradient-to-l from-orange-400 to-orange-500 rounded-l-full h-16 flex items-center justify-start pl-4">
            <button 
              onClick={() => setCurrentWeek(navigateWeek(currentWeek, 1))}
              className="text-black hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="bg-gradient-to-l from-blue-400 to-blue-500 rounded-l-full h-12"></div>
          <div className="bg-gradient-to-l from-purple-400 to-purple-500 rounded-l-full h-12"></div>
          <div className="flex-1 bg-gradient-to-l from-orange-300 to-orange-400 rounded-l-full"></div>
          <div className="bg-gradient-to-l from-blue-400 to-blue-500 rounded-l-full h-12"></div>
        </div>
      </div>

      {/* Bottom LCARS Bar */}
      <div className="flex items-stretch h-16 gap-2 px-4">
        <div className="bg-gradient-to-t from-purple-400 to-purple-500 rounded-t-full w-16"></div>
        <div className="flex-1 bg-gradient-to-t from-orange-400 to-orange-500 rounded-t-full flex items-center justify-center">
          <span className="text-black font-black text-sm tracking-widest">LCARS 47 - EDUCATIONAL OPERATIONS</span>
        </div>
        <div className="bg-gradient-to-t from-purple-400 to-purple-500 rounded-t-full w-16"></div>
      </div>
    </div>
  );
};

export default LCARSBridge;