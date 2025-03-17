import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import HighlightCarousel from "@/components/HighlightCarousel";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact"; 
import Footer from "@/components/Footer"; // ✅ Add Footer component

export default function Home() {
  return (
    <main className="min-h-screen relative text-gray-900">
      {/* ✅ Background */}
      <div className="absolute inset-0 animated-lines"></div>

      <Navbar />

      {/* About Me Section */}
      <section id="about" className="flex items-center justify-center">
        <AboutMe />
      </section>

      {/* Recent Highlights Carousel Section */}
      <section id="recent-highlights" className="flex items-center justify-center">
        <HighlightCarousel />
      </section>

      {/* Experience Section */}
      <section id="experience" className="flex items-center justify-center scroll-mt-20">
        <Experience />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="flex items-center justify-center scroll-mt-20">
        <Portfolio />
      </section>

      {/* ✅ Contact Section (Footer-like placement) */}
      <section id="contact" className="flex items-center justify-center scroll-mt-20">
        <Contact />
      </section>

      {/* ✅ Footer (Final sign-off message) */}
      <Footer />
    </main>
  );
}
