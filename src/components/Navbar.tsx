"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Helper function to determine if we need to go back to home page for anchors
  const getNavLink = (anchor: string) => {
    return pathname === "/" ? `#${anchor}` : `/#${anchor}`;
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-lg text-writingColor z-50 transition-all shadow-md">
      <div className="flex items-center justify-between px-12 h-16 w-full">

        {/* Left Side - Avni Kapoor */}
        <Link href="/" className="text-xl font-semibold hover:text-accent transition">
          Avni Kapoor
        </Link>

        {/* Right Side - Navigation + Contact */}
        <div className="flex items-center space-x-8 text-lg font-medium">
          <nav className="hidden md:flex space-x-8">
            <Link href={getNavLink("about")} className="hover:text-accent transition">about</Link>
            <Link href={getNavLink("experience")} className="hover:text-accent transition">experience</Link>
            <Link href={getNavLink("portfolio")} className="hover:text-accent transition">portfolio</Link>
            <Link href="/blog" className="hover:text-accent transition">blog</Link>
          </nav>

          {/* Contact Button */}
          <motion.a
            href={getNavLink("contact")}
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 rounded-lg text-med font-medium transition-all bg-accent text-darkAccent hover:bg-darkAccent hover:text-white hidden md:inline-block"
          >
            contact
          </motion.a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col space-y-1 p-2 focus:outline-none"
            >
              <div className={`h-[3px] w-8 bg-writingColor transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
              <div className={`h-[3px] w-8 bg-writingColor transition-all ${isOpen ? "opacity-0" : ""}`}></div>
              <div className={`h-[3px] w-8 bg-writingColor transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute top-full w-full bg-primary backdrop-blur-lg p-4 rounded-lg md:hidden"
        >
          <ul className="text-center space-y-2">
            <li><Link href={getNavLink("about")} onClick={() => setIsOpen(false)}>about</Link></li>
            <li><Link href={getNavLink("experience")} onClick={() => setIsOpen(false)}>experience</Link></li>
            <li><Link href={getNavLink("portfolio")} onClick={() => setIsOpen(false)}>portfolio</Link></li>
            <li><Link href="/blog" onClick={() => setIsOpen(false)}>blog</Link></li>
            <li><Link href={getNavLink("contact")} onClick={() => setIsOpen(false)}>contact</Link></li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}