import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import HighlightCarousel from "@/components/HighlightCarousel";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact"; // ✅ Add Contact component

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-gray-900">
      <Navbar /> {/*Ensures Navbar appears at the top */}

      {/* About Me Section */}
      <section id="about" className="flex items-center justify-center">
        <AboutMe />
      </section>

      {/* Recent Highlights Carousel Section */}
      <section id="recent-highlights" className="flex items-center justify-center">
        <HighlightCarousel />
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center scroll-mt-20">
        <Experience />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen flex items-center justify-center scroll-mt-20">
        <Portfolio />
      </section>

      {/* ✅ Contact Section (Footer-like placement) */}
      <section id="contact" className="min-h-screen flex items-center justify-center scroll-mt-20">
        <Contact />
      </section>
    </main>
  );
}
