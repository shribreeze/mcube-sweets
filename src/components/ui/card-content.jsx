import React from "react";

export const CardContent = ({ className = "", children, ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};
