// Subject definitions and their associated colors
export const SUBJECTS = {
  MATH: 'Math',
  READING: 'Reading',
  WRITING: 'Writing',
  SCIENCE: 'Science',
  HISTORY: 'History',
  ART: 'Art',
  MUSIC: 'Music',
  OTHER: 'Other'
};

export const SUBJECT_COLORS = {
  [SUBJECTS.MATH]: 'bg-blue-100 text-blue-800',
  [SUBJECTS.READING]: 'bg-green-100 text-green-800',
  [SUBJECTS.WRITING]: 'bg-purple-100 text-purple-800',
  [SUBJECTS.SCIENCE]: 'bg-orange-100 text-orange-800',
  [SUBJECTS.HISTORY]: 'bg-red-100 text-red-800',
  [SUBJECTS.ART]: 'bg-pink-100 text-pink-800',
  [SUBJECTS.MUSIC]: 'bg-indigo-100 text-indigo-800',
  [SUBJECTS.OTHER]: 'bg-gray-100 text-gray-800'
};

export const getSubjectColor = (subject) => {
  return SUBJECT_COLORS[subject] || SUBJECT_COLORS[SUBJECTS.OTHER];
};