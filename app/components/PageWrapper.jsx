"use client";
import React from "react";
import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      className="min-h-[85vh] flex w-full m-auto md:w-[80%] items-start pt-3 justify-center"
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.main>
  );
};

export default PageWrapper;
