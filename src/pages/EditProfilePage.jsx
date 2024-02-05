import React from "react";
import BottomNavigation from "@/components/BottomNavigation";
import InputBox from "@/components/InputBox";

const EditProfilePage = () => {
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
          src="https://github.com/shadcn.png"
          alt="avatar"
        />
      </div>

      <div className="pt-28 px-4 pb-44 flex flex-col gap-6">
        <InputBox placeholder="Name" type="text" value="Jessica Jones" />
        <div className="flex gap-6">
          <InputBox placeholder="Age" type="number" value="22" />
          <InputBox placeholder="Gender" type="text" value="Female" />
        </div>
        <InputBox placeholder="Email" type="email" value="jjones@outlook.com" />
        <InputBox placeholder="Name" type="password" value="12345" />
        <button className=" bg-blue-700 py-4 rounded-2xl text-lg">
          Confirm
        </button>
      </div>
    </>
  );
};

export default EditProfilePage;
