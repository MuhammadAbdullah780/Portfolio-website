"use client";
import React from "react";

const FlexBetween = ({ className, ComponentName, children }) => {
  return ComponentName === "div" ? (
    <div className={`flex  p-3   justify-evenly ${className} `}>
      {children}
    </div>
  ) : (
    <section className={`flex  p-3  justify-evenly ${className} `}>
      {children}
    </section>
  );
};

export default FlexBetween;
