import InsightSection from "@/components/InsightSection";
import MedicationIntake from "@/components/MedicationIntake";
import QuickDocumentSection from "@/components/QuickDocumentSection";

function HomePage() {
  return (
    <div className="px-[1.4rem] py-4">
      <div className="space-y-6">
        <MedicationIntake />
        <InsightSection />
        <QuickDocumentSection />
      </div>
    </div>
  );
}

export default HomePage;
