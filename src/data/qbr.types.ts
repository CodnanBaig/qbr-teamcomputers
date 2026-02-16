export interface Section {
  title: string;
  body?: string;
  bullets?: string[];
  quote?: string;
  subBullets?: { label?: string; items: string[] }[];
}

export interface Day {
  id: number;
  title: string;
  subtitle?: string;
  venue: string;
  sections: Section[];
}

export interface QBRData {
  days: Day[];
}
