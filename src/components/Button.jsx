import React from 'react';

const Button = ({ label, disabled, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`font-semibold text-smr text-white mt-2 w-[300px] h-[49px] py-3 px-4 rounded-lg transition duration-200 ${
        disabled
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-[#FD5000] text-white hover:bg-orange-700 cursor-pointer'
      }`}
    >
      {label}
    </button>
  );
};

export default Button;