import React, { useState } from 'react';
import { PantryProvider, usePantry } from './context/littlehouse/pantry';
import { ThemeProvider } from './context/littlehouse/themeContext';
import { ThemedBridge, ThemedViewScreen, ThemedWelcomeScreen } from './components/ThemeRouter';
import YearPlanner from './components/startrek/YearPlanner';
import Console from './components/shared/Console';

const AppContent = () => {
  const { kindredSpirits, isLoading } = usePantry();
  const [selectedDay, setSelectedDay] = useState(null);
  const [showConsole, setShowConsole] = useState(false);
  const [view, setView] = useState('week'); // 'week', 'day', 'year'
  const [currentWeek, setCurrentWeek] = useState(new Date());

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (kindredSpirits.length === 0 && !showConsole) {
    return (
      <>
        <ThemedWelcomeScreen onGetStarted={() => setShowConsole(true)} />
        <Console isOpen={showConsole} onClose={() => setShowConsole(false)} />
      </>
    );
  }

  if (view === 'year') {
    return (
      <YearPlanner 
        currentDate={currentWeek}
        onSelectWeek={(date) => {
          setCurrentWeek(date);
          setView('week');
        }}
      />
    );
  }

  if (selectedDay) {
    return (
      <ThemedViewScreen 
        selectedDay={selectedDay} 
        onBack={() => setSelectedDay(null)} 
      />
    );
  }

  return (
    <ThemedBridge 
      onDayClick={setSelectedDay}
      onYearView={() => setView('year')}
    />
  );
};

function App() {
  return (
    <ThemeProvider>
      <PantryProvider>
        <AppContent />
      </PantryProvider>
    </ThemeProvider>
  );
}

export default App;