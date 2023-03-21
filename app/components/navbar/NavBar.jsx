"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/logo.png";
import NavLink from "./NavLink";
import { RxCross1 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const sideBarAnimation = {
    hidden: {
      width: "0px",
    },
    visible: {
      width: "100%",
      transition: {
        type: "spring",
        duration: 0.2,
        staggerChildren: 0.2,
      },
    },
  };
  const sideBarChildAnimation = {
    hidden: {
      opacity: 0,
      x: 10,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  const NavLinks = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/about",
      text: "About",
    },
    {
      href: "/skills",
      text: "Skills",
    },
    {
      href: "/projects",
      text: "Projects",
    },
    {
      href: "/contact",
      text: "Contact",
    },
  ];

  return (
    <>
      <nav className="w-full h-max py-1 px-5 flex items-center justify-between shadow-md">
        {/* LOGO */}
        <div className="h-full">
          <Link href="/" passHref>
            <Image src={logo} height={60} alt="name" priority />
          </Link>
        </div>
        {/* NAV-LINKS */}
        <div className="flex items-center gap-4">
          {NavLinks.map((link, i) => {
            return (
              <NavLink
                key={i}
                href={link.href}
                className=" hidden sm:inline-block "
              >
                {link.text}
              </NavLink>
            );
          })}

          {/* MOBILE MENU BUTTON */}
          {!show && (
            <div className="sm:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={() => {
                  setShow(true);
                }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          )}
        </div>
      </nav>
      {/* SIDE NAV FOR  MOBILE DEVICES  */}
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            variants={sideBarAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", duration: 0.3 }}
            className="absolute flex items-center pt-40 gap-8 flex-col top-0 right-0 h-[100%]  w-[100%] bg-fg-primary text-bg-secondary z-10"
          >
            {show && (
              <RxCross1
                className="h-7 w-7 absolute top-5 right-5"
                onClick={() => {
                  setShow(false);
                }}
              />
            )}
            {NavLinks.map((link, i) => {
              return (
                <motion.li
                  key={i}
                  variants={sideBarChildAnimation}
                  className="list-none"
                >
                  <NavLink
                    href={link.href}
                    className="font-bold link "
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    {link.text.toLocaleUpperCase()}
                  </NavLink>
                </motion.li>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
