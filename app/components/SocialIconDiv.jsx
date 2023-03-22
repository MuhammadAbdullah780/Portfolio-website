"use client";
import React from "react";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { BiMessageAltDetail } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import SocialLink from "./SocialLink";

const SocialIconDiv = ({ links }) => {
  return (
    <div className="flex items-start gap-4 flex-wrap">
      <SocialLink href={`tel:${links?.mobileNo}`}>
        <IoMdCall />
      </SocialLink>
      <SocialLink
        href={links?.facebook}
        target="_blank"
      >
        <FaFacebookF />
      </SocialLink>
      <SocialLink
        href={links?.instagram}
        target="_blank"
      >
        <RiInstagramFill />
      </SocialLink>
      <SocialLink
        href={links?.linkedIn}
        target="_blank"
      >
        <FaLinkedinIn />
      </SocialLink>
      <SocialLink href={links?.twitter} target="_blank">
        <BsTwitter />
      </SocialLink>
      <SocialLink href={`sms:${links?.mobileNo}`}>
        <BiMessageAltDetail />
      </SocialLink>
      <SocialLink
        href={links?.github}
        target="_blank"
        className="h-10 w-10 flex items-center justify-center rounded-full hover:text-gray-800 bg-bg-primary hover:bg-fg-primary"
      >
        <BsGithub />
      </SocialLink>
    </div>
  );
};

export default SocialIconDiv;
