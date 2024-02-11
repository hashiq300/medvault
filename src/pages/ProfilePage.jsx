import React from "react";
import BottomNavigation from "@/components/BottomNavigation";
import { Pen, Trash, HelpCircle, LogOut } from "lucide-react";
import userStore from "@/store/userStore";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { user } = userStore();
  console.log(user);

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
          src={user?.photoURL}
          alt="avatar"
        />
      </div>

      <div className="pt-16 px-4 pb-44 flex flex-col gap-12">
        <div>
          <h3 className=" text-center text-2xl font-medium">
            {user?.displayName}
          </h3>
          <p className=" text-center text-[#707070] text-lg mt-3">
            {/* 22 F | TX, USA */}
          </p>
          <p className=" text-center text-[#707070] text-lg mt-3">
            {/* jjones@outlook.com | +1 (323) 234 3423 */}
            {`${user?.email} `}
          </p>
        </div>

        <div className=" flex flex-col gap-4">
          <Link to="/profile/edit">
            <button className="w-full flex items-center gap-5 bg-[#1C1E27] p-5 rounded-2xl">
              <Pen size={30} />
              <p>Edit profile</p>
            </button>
          </Link>

          <button className="w-full flex items-center gap-5 bg-[#1C1E27] p-5 rounded-2xl">
            <HelpCircle size={30} />
            <p>Help</p>
          </button>

          <button onClick={() => signOut(auth)} className="w-full flex items-center gap-5 bg-[#1C1E27] p-5 rounded-2xl">
            <LogOut size={30} />
            <p>Logout</p>
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
