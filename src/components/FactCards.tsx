"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Briefcase, Compass, Users, type LucideIcon } from "lucide-react";

type NoteCard = {
  label: string;
  icon: LucideIcon;
  tilt: number;
  place: number;
  text: string;
};

// Copy for the three home notes lives here.
const CARDS = [
  {
    label: "Professional",
    icon: Briefcase,
    tilt: -1.4,
    place: 0,
    text: "i'm currently wrapping up my bachelor's in cognitive and computing science, slated to finish dec 2026 (long time coming!). right now i'm contracting at an EOR startup doing product engineering, and working on my honours project on the side.",
  },
  {
    label: "Personal",
    icon: Compass,
    tilt: 1.2,
    place: 0.46,
    text: "i just got back from a month-long trip. i went to europe, china, and vietnam. travelogue coming soon!",
  },
  {
    label: "Interpersonal",
    icon: Users,
    tilt: -0.8,
    place: 0.84,
    text: "i recently started a new nonprofit with a friend to help start a small scholarship in india. more details to come soon (my second nonprofit, one more to come soon!).",
  },
];

function dipFor(width: number, tilt: number) {
  return Math.ceil((width / 2) * Math.sin((Math.abs(tilt) * Math.PI) / 180)) + 2;
}

function FolderCard({ card }: { card: NoteCard }) {
  const cardRef = useRef<HTMLElement>(null);
  const tabRef = useRef<HTMLHeadingElement>(null);
  const leftRef = useRef(12);
  const tiltRef = useRef(card.tilt);
  const [left, setLeft] = useState(12);
  const [tilt, setTilt] = useState(card.tilt);
  const [dip, setDip] = useState(8);
  const Icon = card.icon;

  const placeTab = (preferredLeft: number) => {
    const cardEl = cardRef.current;
    const tabEl = tabRef.current;
    if (!cardEl || !tabEl) return;
    const min = 12;
    const max = cardEl.clientWidth - tabEl.offsetWidth - 12;
    const next = max <= min ? min : Math.min(Math.max(preferredLeft, min), max);
    leftRef.current = next;
    setLeft(next);
    setDip(dipFor(tabEl.offsetWidth, tiltRef.current));
  };

  useLayoutEffect(() => {
    const cardEl = cardRef.current;
    const tabEl = tabRef.current;
    if (!cardEl || !tabEl) return;
    const min = 12;
    const max = cardEl.clientWidth - tabEl.offsetWidth - 12;
    placeTab(max <= min ? min : min + card.place * (max - min));

    const observer = new ResizeObserver(() => placeTab(leftRef.current));
    observer.observe(cardEl);
    observer.observe(tabEl);
    return () => observer.disconnect();
  }, [card.place]);

  const jump = () => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const cardEl = cardRef.current;
    const tabEl = tabRef.current;
    if (!cardEl || !tabEl) return;
    const min = 12;
    const max = Math.max(min, cardEl.clientWidth - tabEl.offsetWidth - 12);
    const sign = Math.random() < 0.5 ? -1 : 1;
    const nextTilt = sign * (0.4 + Math.random() * 0.7);
    tiltRef.current = nextTilt;
    setTilt(nextTilt);
    const step = 28 + Math.random() * 24;
    const toward = leftRef.current + sign * step;
    const nextLeft =
      toward >= min && toward <= max
        ? toward
        : leftRef.current - sign * step;
    placeTab(nextLeft);
  };

  return (
    <div className="overflow-hidden px-1 pb-1 pt-8 -mx-1 [&+div]:-mt-1">
      <article
        ref={cardRef}
        onMouseDown={(event) => {
          if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            event.preventDefault();
          }
        }}
        onMouseEnter={jump}
        className="t-folder-card group relative t-card-lift hover:z-10 hover:shadow-sm"
      >
        <h2
          ref={tabRef}
          style={
            {
              left,
              "--tab-tilt": `${tilt}deg`,
              "--tab-dip": `${dip}px`,
            } as React.CSSProperties
          }
          className="t-folder-tab absolute bottom-full flex w-max max-w-[calc(100%-1.5rem)] items-center gap-1.5 rounded-t-md border border-b-0 border-dotted border-writingColor/35 bg-[#f0dce4] px-3 pt-1.5 pb-1.5 text-xs font-medium text-writingColor/80 dark:bg-[#1b2233]"
        >
          <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} aria-hidden />
          {card.label}
        </h2>
        <p className="relative z-[1] rounded-md border border-dotted border-writingColor/35 bg-primary px-4 py-3 text-sm leading-relaxed text-writingColor/85">
          {card.text}
        </p>
      </article>
    </div>
  );
}

export default function FactCards() {
  return (
    <div className="mt-1 flex max-w-xl flex-col">
      {CARDS.map((card) => (
        <FolderCard key={card.label} card={card} />
      ))}
    </div>
  );
}
