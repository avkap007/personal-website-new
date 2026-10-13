"use client";

type Fact = {
  text: string;
  real: boolean;
};

const FACTS: Fact[] = [
  {
    text: "i'm currently wrapping up my bachelor's in cognitive and computing science, slated to finish dec 2026 (long time coming!). right now i'm contracting at an EOR startup doing product engineering, and working on my honours project on the side.",
    real: true,
  },
  { text: "placeholder: tell me what goes here", real: false },
  { text: "placeholder: tell me what goes here", real: false },
  { text: "placeholder: tell me what goes here", real: false },
];

export default function FactCards() {
  return (
    <ul className="mt-4 max-w-xl space-y-3">
      {FACTS.map((fact, i) => (
        <li key={i} className="group flex items-start gap-3">
          <span
            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-150 ${
              fact.real ? "bg-darkAccent" : "border border-dashed border-writingColor"
            }`}
          />
          <span
            className={`leading-relaxed text-writingColor transition-all duration-300 group-hover:translate-x-1 group-hover:text-darkAccent ${
              fact.real ? "" : "italic text-sm"
            }`}
          >
            {fact.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
