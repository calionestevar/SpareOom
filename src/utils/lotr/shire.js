// Date helper utilities

export const formatDate = (date) => {
  return date.toISOString().split('T')[0];
};

export const formatDisplayDate = (date) => {
  return date.toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric' 
  });
};

export const formatWeekRange = (startDate, endDate) => {
  const start = startDate.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric' 
  });
  const end = endDate.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
  return `${start} - ${end}`;
};

export const getWeekDays = (date, startDay = 1) => {
  const week = [];
  const startOfWeek = new Date(date);
  const day = startOfWeek.getDay();
  const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : startDay);
  startOfWeek.setDate(diff);

  for (let i = 0; i < 5; i++) {
    const currentDay = new Date(startOfWeek);
    currentDay.setDate(startOfWeek.getDate() + i);
    week.push(currentDay);
  }
  return week;
};

export const navigateWeek = (currentDate, direction) => {
  const newDate = new Date(currentDate);
  newDate.setDate(newDate.getDate() + (direction * 7));
  return newDate;
};