"use client";
import React from "react";
import Button from "../Button";
import FlexColumn from "../FlexColumn";
import SectionHeading from "../SectionHeading";
import SocialIconDiv from "../SocialIconDiv";

const ContactSection = ({ links }) => {
  return (
    <FlexColumn className="w-full !items-start  py-4 px-4 sm:px-6 md:py-6 bg-bg-secondary gap-5">
      <SectionHeading text="Me" coloredText="Contact" />
      <p>Here are the some Links through which you can Contact Me.</p>
      <SocialIconDiv links={links} />
      <Button Text="Hire Me" href={`mailto:${links?.mobileNo}`} />
    </FlexColumn>
  );
};

export default ContactSection;
