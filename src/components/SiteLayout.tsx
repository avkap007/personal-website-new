import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen relative text-writingColor">
      <div className="absolute inset-0 animated-lines" aria-hidden />
      <Navbar />
      <div className="relative z-10 pt-16">{children}</div>
      <Footer />
    </main>
  );
}
