import React from "react";
import InsightSection from "@/components/InsightSection";
import MedicationIntake from "@/components/MedicationIntake";
import ProgressBar from "@/components/ProgressBar";

function HomePage() {
  return (
    <div className="px-[1.4rem] pb-40">
      <div className="space-y-6">
        <ProgressBar/>
        <MedicationIntake />
        <InsightSection />
      </div>
    </div>
  );
}

export default HomePage;
