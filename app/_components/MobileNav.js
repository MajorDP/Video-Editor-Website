"use client";

import Link from "next/link";
import { useState } from "react";

function MobileNav({ navLinks, scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="xl:hidden absolute w-full h-screen top-full left-0 bg-black/30 z-10 animate-fade-in"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        />
      )}

      {/* Hamburger Button */}
      <button className="block xl:hidden z-50" onClick={toggleMenu}>
        {isOpen ? "X" : "☰"}
      </button>

      {/* Menu */}
      {isOpen && (
        <ul
          className={`bg-linear-to-b from-bg-secondary/90 to-bg-secondary/90 backdrop-blur-md text-text-primary duration-200 absolute top-full left-0 px-8 py-4 w-full flex xl:hidden flex-col gap-8 z-50 animate-slide-down`}
        >
          <li
            className="hover:text-accent-hover transition"
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
          >
            <Link href="/contact" className="text-lg font-semibold">
              Get In Contact
            </Link>
          </li>
          {navLinks.map((navLink) => (
            <li
              className="hover:text-accent-hover transition"
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu();
              }}
              key={navLink.label}
            >
              <Link href={navLink.href}>{navLink.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MobileNav;
