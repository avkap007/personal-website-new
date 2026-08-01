import { Suspense } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function NavFallback() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white/30 backdrop-blur-lg z-50 shadow-md" />
  );
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen relative text-writingColor">
      <div className="absolute inset-0 animated-lines" aria-hidden />
      <Suspense fallback={<NavFallback />}>
        <Navbar />
      </Suspense>
      <div className="relative z-10 pt-16">{children}</div>
      <Footer />
    </main>
  );
}
