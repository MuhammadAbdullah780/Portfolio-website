"use client";
import React from "react";

const FlexColumn = ({ className, ComponentName, children }) => {
  return ComponentName === "div" ? (
    <div className={`flex items-center flex-col w-full justify-center ${className} `}>
      {children}
    </div>
  ) : (
    <section className={`flex items-center w-full flex-col justify-center ${className} `}>
      {children}
    </section>
  );
};

export default FlexColumn;
