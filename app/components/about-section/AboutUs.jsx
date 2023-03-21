"use client";
import React from "react";
import Button from "../Button";
import SectionHeading from "../SectionHeading";

const AboutUs = ({ user }) => {
  return (
    <section className="w-full py-4 px-6 md:py-6 bg-bg-secondary">
      {/* ABOUT US HEADING */}
      <SectionHeading coloredText='About' text='Us' />
      {/* ABOUT PARA */}
      <p className="max-w-[70%]">{user.myInfo}</p>
      {/* TWO BUTTONS */}
      {/* DIV THAT HAS A GENERAL IDEA ABOUT YOUR EXPERIENCE */}
    </section>
  );
};

export default AboutUs;
