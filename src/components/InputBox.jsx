import React from "react";

const InputBox = ({ placeholder, value }) => {
  return (
    <div className="relative">
      <input
        value={value}
        type="text"
        className="w-full bg-[#1C1E27] rounded-2xl border-[#707070] border-solid border px-6 py-4"
      />
      <p className="absolute top-[-12px] px-2 left-4 bg-[#1C1E27] text-[#707070] text-base">{placeholder}</p>
    </div>
  );
};

export default InputBox;
