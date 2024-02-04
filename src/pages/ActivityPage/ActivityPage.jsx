import ActivityCard from "@/components/ActivityCard";
import PageTitle from "@/components/PageTitle";
import React from "react";
import { Footprints, Activity, Bed } from "lucide-react";

const ActivityPage = () => {
  return (
    <div className="px-4 pb-44">
      <PageTitle
        title="Activity"
        icon={<img src="/icons/google_fit.svg" alt="fit" width="30" />}
      />

      <div className="flex flex-col gap-6 pt-8">
        <ActivityCard
          activity="Steps"
          icon={<Footprints size={35} color="#00943B" />}
          to="steps"
        />
        <ActivityCard
          activity="Vitals"
          icon={<Activity size={35} color="#EE5252" />}
          to="vitals"
        />
        <ActivityCard
          activity="Sleep"
          icon={<Bed size={35} color="#7000FF" />}
          to="sleep"
        />
      </div>
    </div>
  );
};

export default ActivityPage;
