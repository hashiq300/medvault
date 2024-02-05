import React from "react";
import BottomNavigation from "@/components/BottomNavigation";
import { Pen, Trash, HelpCircle } from "lucide-react";

const ProfilePage = () => {
  return (
    <>
      <BottomNavigation />
      <div className="relative w-full flex justify-center">
        <img
          className="w-full h-[196px] object-cover"
          src="images/user_bg.png"
          alt="cover_image"
        />
        <img
          className=" w-28 h-28 rounded-full object-cover absolute bottom-[-55px]"
          src="https://github.com/shadcn.png"
          alt="avatar"
        />
      </div>

      <div className="pt-16 px-4 pb-44 flex flex-col gap-12">
        <div>
          <h3 className=" text-center text-2xl font-medium">Jessica Jones</h3>
          <p className=" text-center text-[#707070] text-lg mt-3">
            22 F | TX, USA
          </p>
          <p className=" text-center text-[#707070] text-lg mt-3">
            jjones@outlook.com | +1 (323) 234 3423
          </p>
        </div>

        <div className=" flex flex-col gap-4">
          <button className="w-full flex items-center gap-5 bg-[#1C1E27] p-5 rounded-2xl">
            <Pen size={30} />
            <p>Edit profile</p>
          </button>

          <button className="w-full flex items-center gap-5 bg-[#1C1E27] p-5 rounded-2xl">
            <HelpCircle size={30} />
            <p>Help</p>
          </button>

          <button className="w-full flex items-center gap-5 bg-[#1C1E27] p-5 rounded-2xl">
            <Trash color="red" size={30} />
            <p className=" text-red-500">Delete</p>
          </button>
        </div>

        <p className=" font-light text-base text-center">
          Made with 💖 by StudioOne
        </p>
      </div>
    </>
  );
};

export default ProfilePage;
