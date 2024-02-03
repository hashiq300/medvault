import InsightSection from "@/components/InsightSection";
import MedicationIntake from "@/components/MedicationIntake";

function HomePage() {
  return (
    <div className="px-[1.4rem] pt-4">
      <div className="space-y-6">
        <MedicationIntake />
        <InsightSection />
      </div>
    </div>
  );
}

export default HomePage;
