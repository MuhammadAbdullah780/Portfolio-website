"use client";
import { useInView, motion, animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

const SkillsSetInfo = ({ skill }) => {

  return (
    <motion.div  className="flex items-center justify-between gap-3 ">
      <div className="">
        <h5 className="section-title text-base font-semibold">
          {skill.technologyName}
        </h5>
      </div>
      <div className="w-[70%] relative flex items-center justify-center">
        <span className="h-[8px] w-[100%] relative rounded-md bg-slate-500"></span>
        <motion.div
        initial={{ width:'0px' }}
        whileInView={{ width:`${skill.grip}%` }}
        viewport={{ once: true }}
        transition={{ duration:1, ease:'backOut' }}
          // style={{ width: `${skill.grip}%` }}
          className={`absolute rounded-md left-0 h-[8px] bg-fg-primary`}
          id="css"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsSetInfo;
