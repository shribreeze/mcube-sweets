import React from "react";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-[#D0823E] text-white rounded hover:bg-[#b86d30] transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
