import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const InputBox = ({ placeholder, value, type, onChange }) => {
  console.log(value)
  const [showPassword, setShowPassword] = useState(false);

  // Toggle function to switch the showPassword state between true and false
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        // Determine the input type based on the showPassword state and the original type prop
        type={type === 'password' && showPassword ? 'text' : type}
        value={value}
        className="w-full bg-[#1C1E27] rounded-2xl border-[#707070] border-solid border px-6 py-4"
        onChange={onChange}
      />
      <p className="absolute top-[-12px] px-2 left-4 bg-[#1C1E27] text-[#707070] text-base">
        {placeholder}
      </p>

      {type === 'password' && (
        <button
          onClick={toggleShowPassword} // Call toggleShowPassword when the button is clicked
          className="absolute top-4 right-5"
          type="button" // Specify the button type to avoid submitting forms
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </button>
      )}
    </div>
  );
};

export default InputBox;
