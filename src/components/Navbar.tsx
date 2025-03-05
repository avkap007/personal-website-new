import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md text-gray-800 shadow-md z-50 transition-all">
      <div className="container mx-auto flex items-center justify-between h-16 px-8">
        {/* Logo */}
        <a href="#" className="flex items-center font-extrabold tracking-wide text-lg">
          <span className="text-2xl font-apparel text-gray-900">Avni Kapoor</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex font-medium text-lg">
          <ul className="flex items-center space-x-6">
            <li><Link href="#about" className="hover:text-accent transition">About</Link></li>
            <li><Link href="#experience" className="hover:text-accent transition">Experience</Link></li>
            <li><Link href="#portfolio" className="hover:text-accent transition">Portfolio</Link></li>
            {/* <li><Link href="#blog" className="hover:text-accent transition">Blog</Link></li>
            <li><Link href="#contact" className="hover:text-accent transition">Contact</Link></li> */}
          </ul>
        </nav>

        {/* Contact Button now scrolls to #contact */}
        <a href="#contact" className="px-4 py-2 rounded-lg text-med font-medium transition-all bg-info text-pink-800 hover:bg-pink-500 hover:text-white">
          Contact
        </a>
      </div>
    </header>
  );
}
