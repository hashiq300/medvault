import InsightSection from "@/components/InsightSection";
import MedicationIntake from "@/components/MedicationIntake";
import QuickDocumentSection from "@/components/QuickDocumentSection";
import ProgressBar from "@/components/ProgressBar";

function HomePage() {
  return (
    <div className="px-[1.4rem] pb-40">
      <div className="space-y-6">
        <ProgressBar/>
        <MedicationIntake />
        <InsightSection />
        <QuickDocumentSection />
      </div>
    </div>
  );
}

export default HomePage;
