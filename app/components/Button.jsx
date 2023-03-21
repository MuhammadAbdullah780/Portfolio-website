"use client";
import React from "react";

const Button = ({ Text, href, ...props }) => {
  return (
    <a
      href={href}
      {...props}
      className="rounded-md px-6 py-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-fg-primary text-fg-primary"
    >
      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-fg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease" />
      <span className="relative text-fg-primary transition duration-300 group-hover:text-gray-800 ease">
          {Text}
      </span>
    </a>
  );
};

export default Button;
