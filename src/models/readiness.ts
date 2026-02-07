export type ReadinessLevel = "ready" | "partial" | "not-ready";

export interface DayReadiness {
  date: Date;
  level: ReadinessLevel;
  notes?: string;
}

export interface WeekReadiness {
  weekStart: Date;
  days: DayReadiness[];
}
