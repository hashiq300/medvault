import { Check } from "lucide-react";
import { twMerge } from "tailwind-merge";

function MedicationIntake() {
  return (
    <section className="text-gray-50 bg-darkjunglegreen min-h-16 rounded-[0.9375rem] pt-[1.4rem] pb-5 px-[1.6rem]">
      <h2 className="font-medium text-lg mb-[0.38rem]">
        Your Medication intake
      </h2>
      <p className="text-philippinegray text-xs mb-5">Today</p>
      <div className="flex justify-around">
        <Intake time="Morning" done/>
        <Intake time="Noon" done/>
        <Intake time="Night" number={2}/>
      </div>
    </section>
  );
}

function Intake({ time, done, number }) {
  return (
    <div className="aspect-square">
      <div className={twMerge(
        "rounded-full border-2 border-malachite text-malachite w-8 aspect-square mx-auto flex items-center justify-center",
        !done && "border-citrine text-citrine "
      )}>
        {done ? (<Check  />): (
          <>
            {number}
          </>
        )}
      </div>
      <p className="text-center mt-[0.18rem] text-xs">{time}</p>
    </div>
  );
}

export default MedicationIntake;
