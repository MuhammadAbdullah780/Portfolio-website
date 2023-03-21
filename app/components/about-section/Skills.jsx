"use client";
import React from "react";
import SectionHeading from "../SectionHeading";
import SkillsSetInfo from "./SkillsSetInfo";

const Skills = ({ skills }) => {
  return (
    <section className="w-full py-4 px-6 md:py-6 bg-bg-secondary" >
      {/* SKILLS */}
      <SectionHeading text="My" coloredText='Skills' orientation='revert' />
      <div className="my-3 grid grid-cols-1 py-3 md:grid-cols-2 lg:grid-cols-3 gap-5" >
        {
          skills?.map((skill) => {
            return (
              <SkillsSetInfo key={skill.id}  skill={skill}  />
            )
          })
        }
      </div>
    </section>
  );
};

export default Skills;
