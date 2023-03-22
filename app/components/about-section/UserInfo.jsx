"use client";
import Image from "next/image";
import React from "react";
import FlexBetween from "../FlexBetween";
import Typewriter from "typewriter-effect";
import Button from "../Button";
import { motion } from "framer-motion";

const UserInfo = ({ user }) => {
  return (
    <FlexBetween className="items-start bg-bg-secondary md:items-center w-full md:flex-row flex-col-reverse ">
      <motion.div
        initial={{ opacity: 0, x: 30, scale: 0 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type:'tween', delay:0 }}
        className="p-4 md:w-[50%] md:h-[100%] "
      >
        <h4>Hello I'm </h4>
        <h1>
          <span className="text-fg-primary font-bold text-2xl">
            {user?.name}
          </span>
        </h1>
        <h4 className="flex gap-2">
          <span>A</span>
          <Typewriter
            options={{
              strings: user?.workPositions,
              autoStart: true,
              loop: true,
              cursorClassName: "text-fg-primary",
            }}
          />
        </h4>
        <div className="py-4 flex gap-4 ">
          <Button Text="Hire Me" href={`mailto:${user?.email}`} />
          <Button Text="My CV" href="CV.pdf" download />
        </div>
      </motion.div>
      <motion.div
        className="m-auto bg-fg-primary rounded flex-shrink-0 p-4"
      >
        <Image
          src={user?.image}
          loading="lazy"
          alt={user?.name}
          placeholder="empty"
          className="-z-10"
          height={300}
          width={300}
        />
      </motion.div>
    </FlexBetween>
  );
};

export default UserInfo;
