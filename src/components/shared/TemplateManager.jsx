import React, { useState, useEffect } from 'react';
import { Copy, Plus, X, Save } from 'lucide-react';
import { usePantry } from '../../context/littlehouse/pantry';
import { SUBJECTS } from '../../constants/narnia/cairParavel';

const TemplateManager = ({ isOpen, onClose, onApplyTemplate }) => {
  const { kindredSpirits } = usePantry();
  const [templates, setTemplates] = useState([]);
  const [showCreateTemplate, setShowCreateTemplate] = useState(false);
  const [newTemplate, setNewTemplate] = useState({
    name: '',
    lessons: []
  });
  const [currentLesson, setCurrentLesson] = useState({
    childId: '',
    subject: '',
    description: '',
    days: { mon: false, tue: false, wed: false, thu: false, fri: false }
  });

  // Load templates from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('spare-oom-templates');
    if (saved) {
      setTemplates(JSON.parse(saved));
    }
  }, []);

  // Save templates to localStorage
  const saveTemplates = (updatedTemplates) => {
    setTemplates(updatedTemplates);
    localStorage.setItem('spare-oom-templates', JSON.stringify(updatedTemplates));
  };

  const addLessonToTemplate = () => {
    if (currentLesson.childId && currentLesson.subject) {
      setNewTemplate({
        ...newTemplate,
        lessons: [...newTemplate.lessons, { ...currentLesson }]
      });
      setCurrentLesson({
        childId: '',
        subject: '',
        description: '',
        days: { mon: false, tue: false, wed: false, thu: false, fri: false }
      });
    }
  };

  const saveTemplate = () => {
    if (newTemplate.name && newTemplate.lessons.length > 0) {
      const template = {
        id: Date.now().toString(),
        ...newTemplate
      };
      saveTemplates([...templates, template]);
      setNewTemplate({ name: '', lessons: [] });
      setShowCreateTemplate(false);
    }
  };

  const deleteTemplate = (templateId) => {
    saveTemplates(templates.filter(t => t.id !== templateId));
  };

  const applyTemplate = (template) => {
    onApplyTemplate(template);
    onClose();
  };

  if (!isOpen) return null;

  if (showCreateTemplate) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
        <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <h3 className="text-xl font-bold mb-4">Create Lesson Template</h3>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Template Name</label>
            <input
              type="text"
              value={newTemplate.name}
              onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
              placeholder="e.g., 'Standard Week' or 'Math & Reading Only'"
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div className="border-t pt-4 mb-4">
            <h4 className="font-semibold mb-3">Add Lessons to Template</h4>
            
            <div className="space-y-3 mb-3">
              <div>
                <label className="block text-sm font-medium mb-1">Child</label>
                <select
                  value={currentLesson.childId}
                  onChange={(e) => setCurrentLesson({ ...currentLesson, childId: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="">Select a child</option>
                  <option value="all">All Children</option>
                  {kindredSpirits.map(child => (
                    <option key={child.id} value={child.id}>{child.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <select
                  value={currentLesson.subject}
                  onChange={(e) => setCurrentLesson({ ...currentLesson, subject: e.target.value })}
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
                  value={currentLesson.description}
                  onChange={(e) => setCurrentLesson({ ...currentLesson, description: e.target.value })}
                  placeholder="e.g., 'Chapters 1-3'"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Days of Week</label>
                <div className="flex gap-2 flex-wrap">
                  {['mon', 'tue', 'wed', 'thu', 'fri'].map(day => (
                    <label key={day} className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={currentLesson.days[day]}
                        onChange={(e) => setCurrentLesson({
                          ...currentLesson,
                          days: { ...currentLesson.days, [day]: e.target.checked }
                        })}
                        className="rounded"
                      />
                      <span className="text-sm capitalize">{day}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={addLessonToTemplate}
                className="w-full bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-200 flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add to Template
              </button>
            </div>

            {newTemplate.lessons.length > 0 && (
              <div className="border-t pt-3">
                <h5 className="font-medium mb-2">Lessons in Template ({newTemplate.lessons.length})</h5>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {newTemplate.lessons.map((lesson, idx) => {
                    const child = kindredSpirits.find(c => c.id === lesson.childId);
                    const activeDays = Object.entries(lesson.days)
                      .filter(([_, active]) => active)
                      .map(([day]) => day.toUpperCase())
                      .join(', ');
                    
                    return (
                      <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                        <div>
                          <span className="font-medium">
                            {lesson.childId === 'all' ? 'All Children' : child?.name}
                          </span>
                          {' - '}
                          <span className="text-indigo-600">{lesson.subject}</span>
                          {lesson.description && <span className="text-gray-600"> ({lesson.description})</span>}
                          <div className="text-xs text-gray-500">{activeDays}</div>
                        </div>
                        <button
                          onClick={() => setNewTemplate({
                            ...newTemplate,
                            lessons: newTemplate.lessons.filter((_, i) => i !== idx)
                          })}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-2 mt-6">
            <button
              onClick={saveTemplate}
              disabled={!newTemplate.name || newTemplate.lessons.length === 0}
              className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save Template
            </button>
            <button
              onClick={() => setShowCreateTemplate(false)}
              className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold mb-4">Lesson Templates</h3>
        
        <p className="text-gray-600 text-sm mb-4">
          Create reusable lesson templates to quickly populate your weekly schedule
        </p>

        {templates.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <p>No templates yet. Create one to get started!</p>
          </div>
        ) : (
          <div className="space-y-3 mb-4">
            {templates.map(template => (
              <div key={template.id} className="border-2 border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-lg">{template.name}</h4>
                    <p className="text-sm text-gray-500">{template.lessons.length} lesson(s)</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => applyTemplate(template)}
                      className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 flex items-center gap-1 text-sm"
                    >
                      <Copy className="w-3 h-3" />
                      Apply
                    </button>
                    <button
                      onClick={() => deleteTemplate(template.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  {template.lessons.slice(0, 3).map((lesson, idx) => {
                    const child = kindredSpirits.find(c => c.id === lesson.childId);
                    return (
                      <div key={idx}>
                        • {lesson.childId === 'all' ? 'All Children' : child?.name} - {lesson.subject}
                      </div>
                    );
                  })}
                  {template.lessons.length > 3 && (
                    <div>... and {template.lessons.length - 3} more</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={() => setShowCreateTemplate(true)}
            className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Create New Template
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateManager;