"use client";
import React from "react";
import FlexColumn from "../FlexColumn";
import SectionHeading from "../SectionHeading";
import SingleProject from "./SingleProject";

const WorkSection = ({ projects }) => {
  return (
    <FlexColumn className="w-full !items-start  py-4 px-4 sm:px-6 md:py-6 bg-bg-secondary gap-3">
      <SectionHeading text="My" coloredText="Projects" orientation="revert" />
      {/* PROJECT DIV'S */}
      {projects?.map((project) => {
        return <SingleProject project={project} key={project.id} />;
      })}
    </FlexColumn>
  );
};

export default WorkSection;
