export interface LessonPlan {
  id: string;
  subject: string;
  materials: string[];   // worksheets, books, etc
  requiresPrint: boolean;
}

export interface DailyPrepState {
  date: Date;
  lessons: LessonPlan[];
  gradingRemaining: number; // count of items
}

export interface WeekPrepState {
  weekStart: Date;
  days: DailyPrepState[];
}

export type ReadinessStatus =
  | "ready"
  | "warning"
  | "not-ready";

export interface DayReadiness {
  date: Date;
  status: ReadinessStatus;
  missingPrints: string[];
  missingMaterials: string[];
  gradingRemaining: number;
}

export interface WeekReadiness {
  weekStart: Date;
  days: DayReadiness[];
  overallStatus: ReadinessStatus;
}