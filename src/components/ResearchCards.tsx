type ResearchLink = {
  label: string;
  href: string;
  download?: boolean;
};

export type ResearchItem = {
  type: string;
  year: string;
  title: string;
  description: string;
  contribution: string;
  accent: string;
  links: ResearchLink[];
};

export const researchItems: ResearchItem[] = [
  {
    type: "Published research",
    year: "2025",
    title: "BERSting at the Screams",
    description:
      "A dataset and benchmark for testing speech recognition with distant, emotional, obstructed, and shouted voices.",
    contribution:
      "I built the audio validation tool, ran the data analysis, and also helped with data annotation.",
    accent: "#d8ff68",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2505.00059" },
      {
        label: "Dataset",
        href: "https://huggingface.co/datasets/Rosie-Lab/BERSt",
      },
    ],
  },
  {
    type: "Editorial leadership",
    year: "2025",
    title: "Canadian Undergraduate Journal of Cognitive Science",
    description:
      "Volume 8 of an undergraduate journal sharing interdisciplinary work in cognitive science.",
    contribution:
      "As Editor-in-Chief, I led Volume 8 from submissions through publication.",
    accent: "#b9c6ff",
    links: [
      {
        label: "View issue",
        href: "https://journals.lib.sfu.ca/index.php/cujcs/issue/view/424",
      },
    ],
  },
  {
    type: "Pilot study",
    year: "2026",
    title: "Teaching AI Literacy with AI Input Insight",
    description:
      "A hands-on classroom activity exploring how source material, influence, poisoning, and exclusion shape AI output.",
    contribution:
      "I helped design and run a 21-student classroom pilot, then synthesized the outcomes and next steps.",
    accent: "#ffb39f",
    links: [
      {
        label: "Pilot deck",
        href: "https://docs.google.com/presentation/d/1-NtybmU7dnyxsss0A4C-WFH9A8WCLAYm2LNBxvnwVSM/edit",
      },
      { label: "Live tool", href: "https://ai-input-insight.vercel.app/" },
    ],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function ResearchCard({
  item,
  index,
}: {
  item: ResearchItem;
  index: number;
}) {
  return (
    <article className="group flex min-h-[380px] flex-col overflow-hidden rounded-2xl border border-[#171612]/15 bg-white text-[#171612] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,22,18,0.13)] dark:border-white/15">
      <div
        className="h-2 w-full origin-left transition-transform duration-500 group-hover:scale-x-[0.72]"
        style={{ backgroundColor: item.accent }}
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase">
            {item.type} · {item.year}
          </p>
          <span className="font-mono text-[10px] tabular-nums opacity-45">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-6 text-2xl leading-[1.05] font-semibold tracking-[-0.04em]">
          {item.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-[#171612]/65">
          {item.description}
        </p>

        <div className="my-6 rounded-xl bg-[#f3f1ec] p-4">
          <p className="mb-2 font-mono text-[9px] tracking-[0.16em] uppercase opacity-55">
            My contribution
          </p>
          <p className="text-sm leading-relaxed">{item.contribution}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-[#171612]/20 pt-5 text-sm font-semibold">
          {item.links.map((link) => {
            const external = link.href.startsWith("http");

            return (
              <a
                className="flex items-center gap-1.5 underline decoration-1 underline-offset-4 transition-opacity hover:opacity-50"
                download={link.download}
                href={link.href}
                key={link.href}
                rel={external ? "noreferrer" : undefined}
                target={external ? "_blank" : undefined}
              >
                {link.label} <Arrow />
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}
