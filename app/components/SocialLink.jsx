"use client";
import React from "react";

const SocialLink = ({ href, target, children }) => {
  return (
    <a
      href={href}
      target={target}
      className="h-10 w-10 flex items-center justify-center rounded-full hover:text-gray-800 bg-bg-primary hover:bg-fg-primary"
    >
        {children}
    </a>
  );
};

export default SocialLink;
