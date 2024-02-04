import React from "react";
import InsightSection from "@/components/InsightSection";
import MedicationIntake from "@/components/MedicationIntake";
import ProgressBar from "@/components/ProgressBar";
import PinnedDocuments from "@/components/PinnedDocuments";

function HomePage() {
  return (
    <div className="px-[1.4rem] pb-40">
      <div className="space-y-6">
        <ProgressBar/>
        <MedicationIntake />
        <InsightSection />
        <PinnedDocuments/>
      </div>
    </div>
  );
}

export default HomePage;
