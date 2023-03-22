"use client";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import FlexBetween from "../FlexBetween";
import FlexColumn from "../FlexColumn";
import { motion } from "framer-motion";

const SingleProject = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 1 }}
      className="w-full"
    >
      <FlexBetween className="flex-col lg:flex-row w-full bg-bg-primary rounded-md">
        {/* IMG */}
        <Image
          src={project?.image}
          alt="name"
          loading="lazy"
          className="m-auto"
          height={150}
          width={250}
        />
        {/* DETAILS */}
        <FlexColumn className="py-4 px-3 !items-start">
          {/* HEADING */}
          <h4 className="p-3">{project?.name}</h4>
          {/* PARA */}
          <p className="p-3">{project?.description}</p>
          <FlexBetween className="gap-3">
            {/* BUTTONS */}
            <Button Text="View Site" href={project?.siteLink} target="_blank" />
            <Button
              Text="View Code"
              href={project?.githubLink}
              target="_blank"
            />
          </FlexBetween>
        </FlexColumn>
      </FlexBetween>
    </motion.div>
  );
};

export default SingleProject;
