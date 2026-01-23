import React, { useState, useEffect } from 'react';
import { usePantry } from '../../context/littlehouse/pantry';
import { SUBJECTS } from '../../constants/narnia/cairParavel';

const PADD = ({ isOpen, onClose, initialDate }) => {
  const { kindredSpirits, addLesson } = usePantry();
  const [formData, setFormData] = useState({
    childId: '',
    subject: '',
    description: '',
    date: initialDate || ''
  });

  useEffect(() => {
    if (initialDate) {
      setFormData(prev => ({ ...prev, date: initialDate }));
    }
  }, [initialDate]);

  const handleSubmit = () => {
    if (formData.childId && formData.subject && formData.date) {
      addLesson(
        formData.childId,
        formData.subject,
        formData.description,
        formData.date
      );
      setFormData({ childId: '', subject: '', description: '', date: initialDate || '' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-xl font-bold mb-4">Add Lesson</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Child</label>
            <select
              value={formData.childId}
              onChange={(e) => setFormData({ ...formData, childId: e.target.value })}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select a child</option>
              {kindredSpirits.map(child => (
                <option key={child.id} value={child.id}>{child.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select a subject</option>
              {Object.values(SUBJECTS).map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description (optional)</label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="e.g., Chapter 5, pages 42-50"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Add Lesson
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

export default PADD;