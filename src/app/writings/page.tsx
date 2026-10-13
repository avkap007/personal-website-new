import SiteLayout from "@/components/SiteLayout";
import { WRITINGS } from "@/lib/writings";

export const metadata = {
  title: "Writings | Avni Kapoor",
  description: "Essays and notes.",
};

export default function WritingsPage() {
  return (
    <SiteLayout>
      <section className="max-w-2xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <h1 className="text-3xl md:text-4xl font-extrabold font-serif text-writingColor">writings</h1>

        <ul className="mt-10 divide-y divide-writingColor/10 border-y border-writingColor/10">
          {WRITINGS.map((w) => (
            <li key={w.id} className="py-5 first:pt-0 last:pb-0">
              <a
                href={w.href}
                target={w.external ? "_blank" : undefined}
                rel={w.external ? "noopener noreferrer" : undefined}
                className="group block"
              >
                <h2 className="text-lg font-bold leading-snug text-writingColor group-hover:text-darkAccent transition-colors">
                  {w.title}
                  <span className="t-learn-arrow ml-1 text-writingColor/45 group-hover:text-darkAccent">
                    →
                  </span>
                </h2>
                {(w.date || w.excerpt) && (
                  <div className="mt-1 flex items-center gap-2 text-sm text-writingColor/60">
                    {w.date && <span>{w.date}</span>}
                    {w.date && w.excerpt && <span>·</span>}
                    {w.excerpt && <span>{w.excerpt}</span>}
                  </div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
