import React from "react";
import BottomNavigation from "@/components/BottomNavigation";
import InputBox from "@/components/InputBox";
import { Link } from "react-router-dom";
import userStore from "@/store/userStore";

const EditProfilePage = () => {
  const { user } = userStore()
  return (
    <>
      <BottomNavigation />
      <div className="relative w-full flex justify-center">
        <img
          className="w-full h-[196px] object-cover"
          src="/images/user_bg.png"
          alt="cover_image"
        />
        <img
          className=" w-28 h-28 rounded-full object-cover absolute bottom-[-55px]"
          src={user?.photoURL}
          alt="avatar"
        />
      </div>

      <div className="pt-28 px-4 pb-44 flex flex-col gap-6">
        <InputBox placeholder="Name" type="text" value={user?.displayName} />
        <div className="flex gap-6">
          <InputBox placeholder="Age" type="number" value="22" />
          <InputBox placeholder="Gender" type="text" value="Male" />
        </div>
        <InputBox placeholder="Email" type="email" value={user?.email} />
        <InputBox placeholder="Password" type="password" value="12345" />
        <Link to="/" className=" bg-blue-700 py-4 rounded-2xl text-lg text-center">
          Confirm
        </Link>
      </div>
    </>
  );
};

export default EditProfilePage;
