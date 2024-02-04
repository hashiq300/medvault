import React from "react";
import { CircleProgress } from "react-gradient-progress";

const ProgressBar = () => {
  return (
    <div className="w-full flex justify-center relative">
      <div className="w-[240px] h-[240px] absolute  rounded-full flex flex-col justify-center items-center">
        <h3 className=" text-5xl font-semibold">45</h3>
        <p>Minutes</p>
      </div>
      <CircleProgress
        percentage={75}
        strokeWidth={20}
        width={240}
        primaryColor={["#fff", "#1A4CD3"]}
        fontColor="transparent"
      />
      <div
        style={{ boxShadow: "5px 1px 7px 0px rgba(0, 0, 0, 0.30)" }}
        className="w-[21px] h-[21px] bg-[#1A4CD3] rounded-full absolute top-[29px]"
      ></div>
    </div>
  );
};

export default ProgressBar;
