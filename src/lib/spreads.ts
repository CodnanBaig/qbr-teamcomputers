import type { QBRData, Section } from "@/data/qbr.types";

export interface SpreadSpec {
  dayIndex: number;
  sectionIndices: number[];
  label?: string; // e.g. "Day 1 – Part 1"
}

/**
 * Maps QBR content to book spreads.
 * Day 1: 3 spreads (sections 0–4, 5–8, 9–end)
 * Day 2: 2 spreads (sections 0–6, 7–end)
 * Day 3: 3 spreads (sections 0–4, 5–9, 10–end)
 * Gallery: 1 spread (handled separately)
 */
export function getSpreadSpecs(data: QBRData): SpreadSpec[] {
  const day1 = data.days[0];
  const day2 = data.days[1];
  const day3 = data.days[2];

  return [
    // Cover is page 0, handled by component
    { dayIndex: 0, sectionIndices: [0, 1, 2, 3, 4], label: "Day 1 – Part 1" },
    { dayIndex: 0, sectionIndices: [5, 6, 7, 8, 9], label: "Day 1 – Part 2" },
    { dayIndex: 0, sectionIndices: [10, 11, 12, 13, 14], label: "Day 1 – Part 3" },
    { dayIndex: 1, sectionIndices: [0, 1, 2, 3, 4, 5, 6], label: "Day 2 – Part 1" },
    { dayIndex: 1, sectionIndices: [7, 8, 9, 10, 11, 12], label: "Day 2 – Part 2" },
    { dayIndex: 2, sectionIndices: [0, 1, 2, 3, 4], label: "Day 3 – Part 1" },
    { dayIndex: 2, sectionIndices: [5, 6, 7, 8, 9], label: "Day 3 – Part 2" },
    { dayIndex: 2, sectionIndices: [10, 11, 12, 13, 14], label: "Day 3 – Part 3" },
  ];
}

export function getSectionsForSpread(data: QBRData, spec: SpreadSpec): Section[] {
  const day = data.days[spec.dayIndex];
  return spec.sectionIndices
    .filter((i) => i < day.sections.length)
    .map((i) => day.sections[i]);
}
