import React from "react";
import { StickyNote } from "lucide-react";

const PinnedDocuments = () => {
  return (
    <div className="w-full bg-[#1C1E27] rounded-2xl py-5 px-6">
      <h3 className=" text-lg font-medium">Your Documents</h3>

      <div className="flex flex-wrap justify-around gap-6 mt-8">
        <button className="flex flex-col items-center w-[130px] h-[130px] bg-[#2F2F40] rounded-2xl gap-2 justify-center">
          <StickyNote size={35} />
          <p className=" text-base w-24">Health Insurance</p>
        </button>

        <button className="flex flex-col items-center w-[130px] h-[130px] bg-[#2F2F40] rounded-2xl gap-2 justify-center">
          <StickyNote size={35} />
          <p className=" text-base w-24">Health Insurance</p>
        </button>
      </div>
    </div>
  );
};

export default PinnedDocuments;
