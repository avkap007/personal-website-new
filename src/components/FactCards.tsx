"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Briefcase, Compass, Users } from "lucide-react";

// Copy for the three home notes lives here.
const CARDS = [
  {
    label: "professional",
    icon: Briefcase,
    tilt: -3,
    place: 0,
    text: "i'm currently wrapping up my bachelor's in cognitive and computing science, slated to finish dec 2026 (long time coming!). right now i'm contracting at an EOR startup doing product engineering, and working on my honours project on the side.",
  },
  {
    label: "personal",
    icon: Compass,
    tilt: 2.5,
    place: 0.46,
    text: "i just got back from a month-long trip. i went to europe, china, and vietnam. travelogue coming soon!",
  },
  {
    label: "interpersonal",
    icon: Users,
    tilt: -1.5,
    place: 0.84,
    text: "i recently started a new nonprofit with a friend to help start a small scholarship in india. more details to come soon (my second nonprofit, one more to come soon!).",
  },
];

function dipFor(width, tilt) {
  return Math.ceil((width / 2) * Math.sin((Math.abs(tilt) * Math.PI) / 180)) + 2;
}

function FolderCard({ card }) {
  const cardRef = useRef(null);
  const tabRef = useRef(null);
  const [left, setLeft] = useState(12);
  const [tilt, setTilt] = useState(card.tilt);
  const [dip, setDip] = useState(8);
  const Icon = card.icon;

  useLayoutEffect(() => {
    const cardEl = cardRef.current;
    const tabEl = tabRef.current;
    if (!cardEl || !tabEl) return;
    const min = 12;
    const max = cardEl.clientWidth - tabEl.offsetWidth - 12;
    setLeft(max <= min ? min : min + card.place * (max - min));
    setDip(dipFor(tabEl.offsetWidth, card.tilt));
  }, [card.place, card.tilt]);

  const jump = () => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const cardEl = cardRef.current;
    const tabEl = tabRef.current;
    if (!cardEl || !tabEl) return;
    const min = 12;
    const max = cardEl.clientWidth - tabEl.offsetWidth - 12;
    const next = max <= min ? min : min + Math.random() * (max - min);
    const sign = Math.random() < 0.5 ? -1 : 1;
    const nextTilt = sign * (1.5 + Math.random() * 4);
    setLeft(next);
    setTilt(nextTilt);
    setDip(dipFor(tabEl.offsetWidth, nextTilt));
  };

  return (
    <article
      ref={cardRef}
      onMouseDown={(event) => {
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
          event.preventDefault();
        }
      }}
      onClick={jump}
      className="t-folder-card group relative t-card-lift hover:z-10 hover:shadow-sm"
    >
      <h2
        ref={tabRef}
        style={{ left, "--tab-tilt": `${tilt}deg`, "--tab-dip": `${dip}px` }}
        className="t-folder-tab absolute bottom-full flex min-w-[12.5rem] items-center gap-1.5 rounded-t-md border border-b-0 border-writingColor/20 bg-primary px-4 pb-0.5 pt-1 text-[10px] uppercase tracking-[0.18em] text-writingColor/55"
      >
        <Icon className="h-3 w-3 shrink-0" strokeWidth={1.75} aria-hidden />
        {card.label}
      </h2>
      <p className="relative z-[1] rounded-md border border-writingColor/20 bg-primary px-4 py-3 text-sm leading-relaxed text-writingColor/85">
        {card.text}
      </p>
    </article>
  );
}

export default function FactCards() {
  return (
    <div className="mt-8 flex max-w-xl flex-col gap-8">
      {CARDS.map((card) => (
        <FolderCard key={card.label} card={card} />
      ))}
    </div>
  );
}
