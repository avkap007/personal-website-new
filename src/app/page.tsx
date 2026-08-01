import SiteLayout from "@/components/SiteLayout";
import AboutMe from "@/components/AboutMe";
import HighlightCarousel from "@/components/HighlightCarousel";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <SiteLayout>
      <section id="about" className="flex items-center justify-center">
        <AboutMe />
      </section>

      <section id="recent-highlights" className="flex items-center justify-center">
        <HighlightCarousel />
      </section>

      <section id="experience" className="flex items-center justify-center scroll-mt-20">
        <Experience />
      </section>

      <section id="portfolio" className="flex items-center justify-center scroll-mt-20">
        <Portfolio />
      </section>

      <section id="contact" className="flex items-center justify-center scroll-mt-20">
        <Contact />
      </section>
    </SiteLayout>
  );
}
