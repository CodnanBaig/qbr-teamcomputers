"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Tabs from "@/components/Tabs";
import DaySection from "@/components/DaySection";
import ConsolidatedActionPoints from "@/components/ConsolidatedActionPoints";
import { qbrData } from "@/data/qbr";
import {
  day1ImageFiles,
  day1VideoFiles,
  day2ImageFiles,
  day2VideoFiles,
  day3ImageFiles,
  day3VideoFiles,
} from "@/data/gallery";

export default function Home() {
  const [activeTab, setActiveTab] = useState(1);

  const day1 = qbrData.days[0];
  const day2 = qbrData.days[1];
  const day3 = qbrData.days[2];

  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 1 && (
        <DaySection
          day={day1}
          images={day1ImageFiles}
          videos={day1VideoFiles}
        />
      )}

      {activeTab === 2 && (
        <DaySection
          day={day2}
          images={day2ImageFiles}
          videos={day2VideoFiles}
        />
      )}

      {activeTab === 3 && (
        <DaySection
          day={day3}
          images={day3ImageFiles}
          videos={day3VideoFiles}
        />
      )}

      {activeTab === 4 && <ConsolidatedActionPoints />}
    </main>
  );
}
