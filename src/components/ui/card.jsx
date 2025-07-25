import React from "react";

export const Card = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`rounded-2xl shadow-md border border-gray-200 bg-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
