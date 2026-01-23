import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Grid, List, Plus } from 'lucide-react';
import { usePantry } from '../../context/littlehouse/pantry';
import { useTheme } from '../../context/littlehouse/themeContext';
import { formatDate } from '../../utils/lotr/shire';

const YearPlanner = ({ onSelectWeek, currentDate }) => {
  const { getLessonsForDay, kindredSpirits } = usePantry();
  const { theme } = useTheme();
  const [viewYear, setViewYear] = useState(currentDate.getFullYear());
  const [viewMode, setViewMode] = useState('year'); // 'year' or 'month'
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const getLessonCountForDay = (date) => {
    const dateKey = formatDate(date);
    const lessons = getLessonsForDay(dateKey);
    return lessons.length;
  };

  const getWeekNumber = (date) => {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const diff = date - startOfYear;
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.ceil(diff / oneWeek);
  };

  const renderMonthGrid = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days = [];
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-square"></div>);
    }
    
    // Add days of month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = formatDate(date) === formatDate(new Date());
      const lessonCount = getLessonCountForDay(date);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      
      days.push(
        <button
          key={day}
          onClick={() => onSelectWeek(date)}
          className={`aspect-square p-1 border rounded text-sm transition ${
            isToday ? `border-2 border-${theme.colors.primary} bg-${theme.colors.primary} bg-opacity-10` : 'border-gray-200'
          } ${isWeekend ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'}`}
        >
          <div className="font-semibold">{day}</div>
          {lessonCount > 0 && (
            <div className={`text-xs text-${theme.colors.primary} font-bold`}>
              {lessonCount}
            </div>
          )}
        </button>
      );
    }
    
    return days;
  };

  const renderYearView = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {months.map((monthName, monthIndex) => {
          const today = new Date();
          const isCurrentMonth = viewYear === today.getFullYear() && monthIndex === today.getMonth();
          
          return (
            <div 
              key={monthName}
              className={`border-2 rounded-lg p-4 ${
                isCurrentMonth ? `border-${theme.colors.primary}` : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => {
                  setSelectedMonth(monthIndex);
                  setViewMode('month');
                }}
                className={`text-lg font-bold mb-3 w-full text-left hover:text-${theme.colors.primary} transition`}
                style={{ fontFamily: theme.fonts.primary }}
              >
                {monthName} {viewYear}
              </button>
              <div className="grid grid-cols-7 gap-1 text-xs">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                  <div key={i} className="text-center font-semibold text-gray-500">
                    {d}
                  </div>
                ))}
                {renderMonthGrid(viewYear, monthIndex)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderMonthView = () => {
    const monthName = months[selectedMonth];
    
    return (
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setViewMode('year')}
            className={`text-${theme.colors.primary} hover:underline flex items-center gap-2`}
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Year View
          </button>
          <h2 className="text-2xl font-bold" style={{ fontFamily: theme.fonts.primary }}>
            {monthName} {viewYear}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => {
                if (selectedMonth === 0) {
                  setSelectedMonth(11);
                  setViewYear(viewYear - 1);
                } else {
                  setSelectedMonth(selectedMonth - 1);
                }
              }}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                if (selectedMonth === 11) {
                  setSelectedMonth(0);
                  setViewYear(viewYear + 1);
                } else {
                  setSelectedMonth(selectedMonth + 1);
                }
              }}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-7 gap-2 mb-2">
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
              <div key={day} className="text-center font-semibold text-gray-700 pb-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {renderMonthGrid(viewYear, selectedMonth)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.colors.background} p-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calendar className={`w-8 h-8 text-${theme.colors.primary}`} />
              <h1 className="text-3xl font-bold" style={{ fontFamily: theme.fonts.primary }}>
                Year Planner
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('year')}
                  className={`px-4 py-2 rounded flex items-center gap-2 ${
                    viewMode === 'year'
                      ? `bg-${theme.colors.primary} text-white`
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                  Year
                </button>
                <button
                  onClick={() => setViewMode('month')}
                  className={`px-4 py-2 rounded flex items-center gap-2 ${
                    viewMode === 'month'
                      ? `bg-${theme.colors.primary} text-white`
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  <List className="w-4 h-4" />
                  Month
                </button>
              </div>
              
              {viewMode === 'year' && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewYear(viewYear - 1)}
                    className="p-2 hover:bg-gray-100 rounded"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="font-bold text-lg min-w-[80px] text-center">
                    {viewYear}
                  </span>
                  <button
                    onClick={() => setViewYear(viewYear + 1)}
                    className="p-2 hover:bg-gray-100 rounded"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div>
          {viewMode === 'year' ? renderYearView() : renderMonthView()}
        </div>
      </div>
    </div>
  );
};

export default YearPlanner;