import SiteLayout from "@/components/SiteLayout";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Lil Agents | Avni Kapoor",
  description: "Tiny AI friends that live on your Mac dock.",
};

export default function LilAgentsPage() {
  return (
    <SiteLayout>
      <article className="w-full max-w-[900px] mx-auto px-6 sm:px-10 py-12 md:py-20">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-writingColor/40 hover:text-writingColor transition-colors mb-12"
        >
          ← projects
        </Link>

        {/* Title */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-writingColor">
            Lil Agents
          </h1>
          <p className="mt-4 text-xl text-writingColor/60 italic">
            tiny ai friends that live on your mac dock
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <a
              href="https://github.com/avkap007/lil-agents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-writingColor/50 hover:text-writingColor transition-colors"
            >
              github ↗
            </a>
            <span className="text-writingColor/20">·</span>
            <a
              href="https://lilagents.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-writingColor/50 hover:text-writingColor transition-colors"
            >
              lilagents.xyz ↗
            </a>
            <span className="text-writingColor/20">·</span>
            <span className="text-sm text-writingColor/40">april 2026</span>
          </div>
        </header>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* HERO GIF — center, prominent */}
        {/* ════════════════════════════════════════════════════════════ */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-writingColor/[0.03] mb-16">
          {/* PLACEHOLDER: hero gif */}
          <div className="absolute inset-0 flex items-center justify-center text-writingColor/20">
            <div className="text-center">
              <p className="text-5xl mb-2">🎬</p>
              <p className="text-sm font-mono">hero-gif.gif</p>
            </div>
          </div>
          {/* 
          <Image
            src="/images/portfolio/lil-agents-demo.gif"
            alt="Lil Agents walking on the dock"
            fill
            className="object-cover"
            unoptimized
          />
          */}
        </div>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* WHAT — with image beside it */}
        {/* ════════════════════════════════════════════════════════════ */}
        <section className="grid md:grid-cols-5 gap-8 items-start mb-16">
          <div className="md:col-span-3">
            <h2 className="text-sm font-medium text-writingColor/40 mb-4">what</h2>
            <p className="text-lg text-writingColor/80 leading-relaxed">
              Two animated characters — <strong>Merit</strong> (red) and <strong>Muse</strong> (blue-green) — 
              walk around above your Mac Dock. Click one to open a floating chat terminal 
              backed by your AI CLI of choice. Claude, Codex, Copilot, Gemini — whatever you have installed.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Swift", "SwiftUI", "macOS", "HEVC"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-writingColor/[0.06] text-writingColor/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            {/* PLACEHOLDER: what-image */}
            <div className="aspect-[4/3] rounded-xl bg-writingColor/[0.03] flex items-center justify-center text-writingColor/20">
              <div className="text-center">
                <p className="text-3xl mb-1">📷</p>
                <p className="text-xs font-mono">what-image.png</p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* WHY */}
        {/* ════════════════════════════════════════════════════════════ */}
        <section className="mb-16">
          <h2 className="text-sm font-medium text-writingColor/40 mb-4">why</h2>
          <p className="text-lg text-writingColor/80 leading-relaxed max-w-2xl">
            The two-character setup is intentional: <strong>Merit for work</strong>, 
            <strong> Muse for personal</strong>. Same Dock, different headspace. 
          </p>
          <p className="text-lg text-writingColor/80 leading-relaxed max-w-2xl mt-4">
            I wanted AI to feel more like a companion than a cold tool window. 
            Something you actually enjoy clicking on. Something with personality.
          </p>
        </section>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* HOW I MADE IT */}
        {/* ════════════════════════════════════════════════════════════ */}
        <section className="mb-16">
          <h2 className="text-sm font-medium text-writingColor/40 mb-4">how i made it</h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div>
                <p className="text-sm text-writingColor/40 mb-2">01</p>
                <p className="text-writingColor/80 leading-relaxed">
                  Started with Ryan Stephen&apos;s open-source lil-agents as a base. 
                  The core dock-walking and chat mechanics were already solid.
                </p>
              </div>
              {/* PLACEHOLDER: step-1 image */}
              <div className="aspect-video rounded-lg bg-writingColor/[0.03] flex items-center justify-center text-writingColor/20">
                <div className="text-center">
                  <p className="text-2xl mb-1">📷</p>
                  <p className="text-xs font-mono">step-1.png</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* PLACEHOLDER: step-2 gif */}
              <div className="aspect-video rounded-lg bg-writingColor/[0.03] flex items-center justify-center text-writingColor/20 md:order-1">
                <div className="text-center">
                  <p className="text-2xl mb-1">🎬</p>
                  <p className="text-xs font-mono">step-2.gif</p>
                </div>
              </div>
              <div className="md:order-2">
                <p className="text-sm text-writingColor/40 mb-2">02</p>
                <p className="text-writingColor/80 leading-relaxed">
                  Designed Merit & Muse from scratch — custom character art, 
                  then exported as HEVC videos with alpha transparency so they 
                  float naturally above the dock.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div>
                <p className="text-sm text-writingColor/40 mb-2">03</p>
                <p className="text-writingColor/80 leading-relaxed">
                  Added multi pop-out windows, themed terminals, completion sounds, 
                  and ambient wave animations. The little details that make it feel alive.
                </p>
              </div>
              {/* PLACEHOLDER: step-3 image */}
              <div className="aspect-video rounded-lg bg-writingColor/[0.03] flex items-center justify-center text-writingColor/20">
                <div className="text-center">
                  <p className="text-2xl mb-1">📷</p>
                  <p className="text-xs font-mono">step-3.png</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* REFLECTION / TAKEAWAYS */}
        {/* ════════════════════════════════════════════════════════════ */}
        <section className="border-t border-writingColor/10 pt-12 mb-16">
          <h2 className="text-sm font-medium text-writingColor/40 mb-4">takeaways</h2>
          <ul className="space-y-2 text-writingColor/70">
            <li>· HEVC video with alpha transparency is finicky but worth it</li>
            <li>· macOS dock APIs have some fun quirks</li>
            <li>· small delightful details compound into magic</li>
          </ul>
        </section>

        {/* ════════════════════════════════════════════════════════════ */}
        {/* BOTTOM NAV */}
        {/* ════════════════════════════════════════════════════════════ */}
        <nav className="flex justify-between items-center text-sm text-writingColor/40">
          <Link href="/projects" className="hover:text-writingColor transition-colors">
            ← all projects
          </Link>
          {/* 
          <Link href="/projects/settlewell" className="hover:text-writingColor transition-colors">
            next: SettleWell →
          </Link>
          */}
        </nav>
      </article>
    </SiteLayout>
  );
}
