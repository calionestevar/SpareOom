import {
  WeekPrepState,
  WeekReadiness,
  DayReadiness,
} from "./types";

export function calculateWeekReadiness(
  prep: WeekPrepState
): WeekReadiness {
  const days: DayReadiness[] = prep.days.map((day) => {
    const missingPrints = day.lessons
      .filter((l) => l.requiresPrint)
      .map((l) => l.subject);

    const missingMaterials = day.lessons
      .filter((l) => l.materials.length === 0)
      .map((l) => l.subject);

    let status: "ready" | "warning" | "not-ready" = "ready";

    if (missingPrints.length || missingMaterials.length) {
      status = "warning";
    }

    if (day.gradingRemaining > 0) {
      status = "not-ready";
    }

    return {
      date: day.date,
      status,
      missingPrints,
      missingMaterials,
      gradingRemaining: day.gradingRemaining,
    };
  });

  const overallStatus =
    days.some((d) => d.status === "not-ready")
      ? "not-ready"
      : days.some((d) => d.status === "warning")
      ? "warning"
      : "ready";

  return {
    weekStart: prep.weekStart,
    days,
    overallStatus,
  };
}
