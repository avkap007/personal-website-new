"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/writings", label: "writings" },
] as const;

function navClass(active: boolean) {
  return active
    ? "text-darkAccent font-semibold"
    : "text-writingColor hover:text-darkAccent transition";
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 w-full bg-primary/30 backdrop-blur-lg z-50 shadow-md">
      <div className="flex items-center justify-between px-6 md:px-12 h-16 w-full max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-semibold text-writingColor hover:text-darkAccent transition">
          avni kapoor
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-lg font-medium">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} className={navClass(isActive(href))}>
                {label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col space-y-1 p-2 focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Menu"
          >
            <span
              className={`h-[3px] w-8 bg-writingColor transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`h-[3px] w-8 bg-writingColor transition-all ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-[3px] w-8 bg-writingColor transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden absolute top-full w-full bg-primary/95 backdrop-blur-lg border-t border-accent/30 py-4 px-6">
          <ul className="flex flex-col gap-3 text-center text-lg">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={navClass(isActive(href))}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
