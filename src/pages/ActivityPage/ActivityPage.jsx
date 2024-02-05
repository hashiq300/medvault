import React, { useState , useEffect} from "react";
import ActivityCard from "@/components/ActivityCard";
import PageTitle from "@/components/PageTitle";
import { Footprints, Activity, Bed } from "lucide-react";

const ActivityPage = () => {
  const [isFitConnected, setIsFitConnected] = useState(false);

  const getAccessToFit = async () => {
    // const res = await fetch("http://localhost:3000/auth");
    // const data = await res.json();
    // window.location.href = data.redirect_url;
    setIsFitConnected(true)
  };


  return (
    <div className="px-4 pb-44">
      <PageTitle
        title="Activity"
        icon={<img src="/icons/google_fit.svg" alt="fit" width="30" />}
      />

      {isFitConnected ? (
        <>
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
        </>
      ) : (
        <>
          <div className="pt-10">
            <p className="text-lg font-medium">
              Connect to Google Fit to view your activity
            </p>
            <button
              onClick={() => getAccessToFit()}
              className="flex items-center gap-2 py-3 px-6 bg-[#2F2F40] rounded-lg mt-4"
            >
              <img src="/icons/google_fit.svg" alt="fit" width="30" />
              <p className="text-base">Connect</p>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ActivityPage;
