import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { usePantry } from '../../context/littlehouse/pantry';

const Console = ({ isOpen, onClose }) => {
  const { kindredSpirits, addKindredSpirit, removeKindredSpirit } = usePantry();
  const [newChildName, setNewChildName] = useState('');

  const handleAddChild = () => {
    if (newChildName.trim()) {
      addKindredSpirit(newChildName.trim());
      setNewChildName('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddChild();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-xl font-bold mb-4">Manage Children</h3>
        
        <div className="space-y-3 mb-4">
          {kindredSpirits.map(child => (
            <div key={child.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">{child.name}</span>
              <button
                onClick={() => removeKindredSpirit(child.id)}
                className="text-red-500 hover:text-red-700"
                aria-label={`Remove ${child.name}`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newChildName}
            onChange={(e) => setNewChildName(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Child's name"
            className="flex-1 border rounded-lg px-3 py-2"
          />
          <button
            onClick={handleAddChild}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            aria-label="Add child"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Console;