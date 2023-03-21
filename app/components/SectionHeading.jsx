"use client";
import React from "react";

const SectionHeading = ({ coloredText, text, orientation }) => {
  return orientation === "revert" ? (
    <h2 className="section-heading mb-2">
      {text} &nbsp;
      <span className="section-title">{coloredText}</span>
    </h2>
  ) : (
    <h2 className="section-heading mb-2">
      <span className="section-title">{coloredText}&nbsp;</span>
      {text}
    </h2>
  );
};

export default SectionHeading;
