"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-lg text-writingColor z-50 transition-all shadow-md">
      <div className="flex items-center justify-between px-12 h-16 w-full">

        {/* Left Side - Avni Kapoor */}
        <span className="text-xl font-semibold">Avni Kapoor</span>

        {/* Right Side - Navigation + Contact */}
        <div className="flex items-center space-x-8 text-lg font-medium">
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-accent transition">About</Link>
            <Link href="#experience" className="hover:text-accent transition">Experience</Link>
            <Link href="#portfolio" className="hover:text-accent transition">Portfolio</Link>
          </nav>

          {/* Contact Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 rounded-lg text-med font-medium transition-all bg-accent text-darkAccent hover:bg-darkAccent hover:text-white"
          >
            Contact
          </motion.a>

          {/* Mobile Menu Button - Wider Lines */}
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
            <li><Link href="#about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="#experience" onClick={() => setIsOpen(false)}>Experience</Link></li>
            <li><Link href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
            <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
