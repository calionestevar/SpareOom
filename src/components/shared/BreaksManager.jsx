import React, { useState, useEffect } from 'react';
import { Calendar, Plus, X, Trash2 } from 'lucide-react';
import { formatDate } from '../../utils/lotr/shire';

const BreaksManager = ({ isOpen, onClose }) => {
  const [breaks, setBreaks] = useState([]);
  const [showAddBreak, setShowAddBreak] = useState(false);
  const [newBreak, setNewBreak] = useState({
    name: '',
    startDate: '',
    endDate: '',
    type: 'break' // 'break', 'holiday', 'vacation'
  });

  // Load breaks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('spare-oom-breaks');
    if (saved) {
      setBreaks(JSON.parse(saved));
    }
  }, []);

  // Save breaks to localStorage
  const saveBreaks = (updatedBreaks) => {
    setBreaks(updatedBreaks);
    localStorage.setItem('spare-oom-breaks', JSON.stringify(updatedBreaks));
  };

  const addBreak = () => {
    if (newBreak.name && newBreak.startDate && newBreak.endDate) {
      const breakItem = {
        id: Date.now().toString(),
        ...newBreak,
        createdAt: new Date().toISOString()
      };
      saveBreaks([...breaks, breakItem]);
      setNewBreak({ name: '', startDate: '', endDate: '', type: 'break' });
      setShowAddBreak(false);
    }
  };

  const deleteBreak = (breakId) => {
    saveBreaks(breaks.filter(b => b.id !== breakId));
  };

  const clearLessonsForBreak = (breakItem) => {
    // This would integrate with the lessons system to delete lessons during break
    // For now, just a placeholder
    if (window.confirm(`Clear all lessons from ${breakItem.startDate} to ${breakItem.endDate}?`)) {
      // Would call a function from usePantry to delete lessons in this date range
      alert('Feature coming soon! This will clear lessons during the break period.');
    }
  };

  const getBreakColor = (type) => {
    switch (type) {
      case 'break': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'holiday': return 'bg-red-100 text-red-800 border-red-300';
      case 'vacation': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getDaysBetween = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };

  const sortedBreaks = [...breaks].sort((a, b) => 
    new Date(a.startDate) - new Date(b.startDate)
  );

  const upcomingBreaks = sortedBreaks.filter(b => 
    new Date(b.endDate) >= new Date()
  );

  const pastBreaks = sortedBreaks.filter(b => 
    new Date(b.endDate) < new Date()
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-bold">Breaks & Holidays</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-gray-600 text-sm mb-6">
          Mark breaks, holidays, and vacation periods. These will be highlighted in your calendar.
        </p>

        {!showAddBreak && (
          <button
            onClick={() => setShowAddBreak(true)}
            className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2 mb-6"
          >
            <Plus className="w-5 h-5" />
            Add Break/Holiday
          </button>
        )}

        {showAddBreak && (
          <div className="border-2 border-indigo-200 rounded-lg p-4 mb-6 bg-indigo-50">
            <h4 className="font-semibold mb-3">New Break/Holiday</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={newBreak.name}
                  onChange={(e) => setNewBreak({ ...newBreak, name: e.target.value })}
                  placeholder="e.g., Thanksgiving Break, Summer Vacation"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Start Date</label>
                  <input
                    type="date"
                    value={newBreak.startDate}
                    onChange={(e) => setNewBreak({ ...newBreak, startDate: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">End Date</label>
                  <input
                    type="date"
                    value={newBreak.endDate}
                    onChange={(e) => setNewBreak({ ...newBreak, endDate: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Type</label>
                <select
                  value={newBreak.type}
                  onChange={(e) => setNewBreak({ ...newBreak, type: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="break">School Break</option>
                  <option value="holiday">Holiday</option>
                  <option value="vacation">Vacation</option>
                </select>
              </div>

              {newBreak.startDate && newBreak.endDate && (
                <p className="text-sm text-gray-600">
                  Duration: {getDaysBetween(newBreak.startDate, newBreak.endDate)} days
                </p>
              )}
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={addBreak}
                disabled={!newBreak.name || !newBreak.startDate || !newBreak.endDate}
                className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-gray-300"
              >
                Add
              </button>
              <button
                onClick={() => setShowAddBreak(false)}
                className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {upcomingBreaks.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Upcoming & Current</h4>
            <div className="space-y-2">
              {upcomingBreaks.map(breakItem => (
                <div
                  key={breakItem.id}
                  className={`border-2 rounded-lg p-4 ${getBreakColor(breakItem.type)}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h5 className="font-semibold text-lg">{breakItem.name}</h5>
                      <p className="text-sm mt-1">
                        {new Date(breakItem.startDate).toLocaleDateString()} - {new Date(breakItem.endDate).toLocaleDateString()}
                      </p>
                      <p className="text-xs mt-1 opacity-75">
                        {getDaysBetween(breakItem.startDate, breakItem.endDate)} days • {breakItem.type}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <button
                        onClick={() => clearLessonsForBreak(breakItem)}
                        className="p-2 hover:bg-white hover:bg-opacity-50 rounded"
                        title="Clear lessons during this period"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteBreak(breakItem.id)}
                        className="p-2 hover:bg-white hover:bg-opacity-50 rounded"
                        title="Delete this break"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {pastBreaks.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3 text-gray-500">Past Breaks</h4>
            <div className="space-y-2">
              {pastBreaks.map(breakItem => (
                <div
                  key={breakItem.id}
                  className="border rounded-lg p-3 bg-gray-50 opacity-60"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h5 className="font-semibold">{breakItem.name}</h5>
                      <p className="text-sm text-gray-600">
                        {new Date(breakItem.startDate).toLocaleDateString()} - {new Date(breakItem.endDate).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteBreak(breakItem.id)}
                      className="p-2 hover:bg-gray-200 rounded"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {breaks.length === 0 && !showAddBreak && (
          <div className="text-center py-8 text-gray-400">
            <Calendar className="w-16 h-16 mx-auto mb-3 opacity-50" />
            <p>No breaks or holidays scheduled yet</p>
          </div>
        )}

        <div className="mt-6 pt-4 border-t">
          <button
            onClick={onClose}
            className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreaksManager;