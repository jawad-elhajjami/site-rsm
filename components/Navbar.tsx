"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  IconMenu,
  IconUsersGroup,
  IconInfoCircle,
  IconBooks,
  IconMail,
  IconX,
} from "@tabler/icons-react";

type Theme = "light" | "dark";

interface NavbarProps {
  theme: Theme;
}

const navItems = [
  {
    label: "À propos",
    href: "/about",
    icon: <IconInfoCircle className="h-5 w-5" />,
  },
  {
    label: "Équipe pédagogique",
    href: "/professors",
    icon: <IconUsersGroup className="h-5 w-5" />,
  },

  {
    label: "Programmes",
    href: "/programs",
    icon: <IconBooks className="h-5 w-5" />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <IconMail className="h-5 w-5" />,
  },
];

const Navbar: React.FC<NavbarProps> = ({ theme }) => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`z-50 border border-slate-300 fixed lg:max-w-5xl max-w-md mx-auto lg:w-full md:w-96 w-80 inset-x-0 top-4 rounded-full py-2 px-2 flex items-center justify-between backdrop-blur-2xl ${
        theme === "light" ? "bg-white/80" : "bg-slate-950/80"
      }`}
    >
      <Link href={"/"} className="ml-4">
        <Logo color="text-slate-950" />
      </Link>

      <div
        className={`gap-4 lg:flex hidden text-sm ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="hover:underline hover:text-blue-500 transition-colors"
          >
            <div className="flex items-center gap-2">
              {item.icon}
              {item.label}
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile menu */}
        {isOpen && (
          <div
            className={`absolute top-16 left-0 w-full bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 flex flex-col gap-2 ${
              theme === "light" ? "text-black" : "text-white"
            } lg:hidden`}
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-2 hover:underline border-b pb-2 hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        )}

      <Button className="rounded-full bg-blue-600 lg:block hidden">
        <Link href="/apply" className="text-sm font-semibold">
          Postuler
        </Link>
      </Button>

      <Button className="lg:hidden block rounded-full" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
      </Button>
    </nav>
  );
};

export default Navbar;
