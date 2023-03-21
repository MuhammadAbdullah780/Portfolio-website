"use client";
import React from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import SocialLink from "../SocialLink";

const footer = () => {
  return (
    <footer className="flex items-center justify-center mt-3 gap-3 w-full md:w-[80%] sm:justify-evenly m-auto py-2 px-4 md:py-6 bg-bg-secondary flex-col sm:flex-row ">
      <div>ma0401431@gmail.com</div>
      <div className="flex items-center justify-center gap-3">
        <SocialLink href="sms:+923353975358">
          <BiMessageAltDetail />
        </SocialLink>
        <SocialLink
          href="https://github.com/MuhammadAbdullah780"
          target="_blank"
          className="h-10 w-10 flex items-center justify-center rounded-full hover:text-gray-800 bg-bg-primary hover:bg-fg-primary"
        >
          <BsGithub />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/muhammad-abdullah780/"
          target="_blank"
        >
          <FaLinkedinIn />
        </SocialLink>
      </div>
      <div>© 2022 All Rights Reserved.</div>
    </footer>
  );
};

export default footer;
