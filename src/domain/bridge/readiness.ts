export interface LessonReadiness {
  lessonId: string;
  subject: string;

  materialsPrepared: boolean;
  printed: boolean;
  graded: boolean;

  notes?: string;
}

export interface DayReadiness {
  date: string; // ISO
  lessons: LessonReadiness[];
}

export interface WeekReadiness {
  weekStart: string; // ISO
  days: DayReadiness[];
}
