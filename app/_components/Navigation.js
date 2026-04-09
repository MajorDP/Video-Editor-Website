"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Navigation() {
  const navLinks = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/portfolio",
      label: "Portfolio",
    },
    {
      href: "/services",
      label: "Services",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full flex items-center px-4 lg:px-8 h-16 z-50 duration-200 bg-linear-to-b from-bg-secondary/80 to-bg-secondary/90 xl:to-bg-secondary/50 backdrop-blur-md
  ${scrolled ? "shadow-md text-text-primary" : "text-text-secondary"} `}
    >
      {" "}
      <nav className="max-w-7xl w-full m-auto flex items-center justify-between">
        <Link
          href="/"
          className={`text-xl tracking-[1.05] font-bold ${scrolled ? "text-accent" : "text-accent xl:text-accent/50"} duration-200`}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          JEREMIAH JACKSON
        </Link>
        <ul className="hidden xl:flex items-center flex-row gap-8">
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <Link
                href={navLink.href}
                className="duration-200 relative inline-block
            hover:text-text-primary
              after:content-['']
              after:absolute after:left-1/2 after:bottom-0
              after:h-px after:w-full
              after:bg-accent
              after:-translate-x-1/2
              after:origin-center
              after:scale-x-0
              after:transition-transform
              hover:after:scale-x-100"
              >
                {" "}
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
        <MobileNav navLinks={navLinks} scrolled={scrolled} />
        <Link
          href="/contact"
          className={`${scrolled ? "bg-linear-to-br from-accent to-accent-hover text-black hover:from-accent-hover/20 hover:to-accent-hover/20 hover:text-accent transition duration-200" : "bg-linear-to-br from-transparent to-transparent hover:from-accent-hover/20 hover:to-accent-hover/20 hover:text-accent transition text-accent duration-200"} border border-accent hidden xl:block rounded px-4 py-2 font-semibold`}
        >
          Free Consultation
        </Link>
      </nav>
    </header>
  );
}
