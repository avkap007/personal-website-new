"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Experience = {
  id: number;
  category: string;
  logo: string;
  title: string;
  subtitle: string;
  details: string[];
};

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Work");
  const [open, setOpen] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const categories = ["Work", "Community", "Research", "All"];

  useEffect(() => {
    fetch("/data/experience.json")
      .then((res) => res.json())
      .then((data: Experience[]) => {
        setExperiences(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error loading experience data:", error));
  }, []);

  return (
    <section id="experience" className="w-full max-w-5xl mx-auto px-4 py-20">
      {/* Section Title */}
      <h1 className="text-3xl font-extrabold text-center mb-6 text-writingColor">
        Experience
      </h1>

      {/* Subtitle (Hidden on Mobile) */}
      <p className="text-center text-gray-700 text-md max-w-2xl mx-auto mb-8 hidden md:block">
        "A little bit of everything, all at once." <br />
        My experiences range from product, development, data to research and community. 🌿
      </p>

      {/* Category Tabs (Matching "View Resume" Button) */}
      <div className="flex justify-center space-x-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-md font-medium transition-all ${
              selectedCategory === category
                ? "bg-accent text-darkAccent hover:bg-darkAccent hover:text-white"
                : "bg-muted text-darkAccent hover:bg-darkAccent hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Experience List (No Extra Scrolling) */}
      <div className="space-y-6 mx-auto max-w-[700px] px-2">
        {loading ? (
          <SkeletonLoader /> // Placeholder when loading
        ) : (
          experiences
            .filter((exp) => selectedCategory === "All" || exp.category === selectedCategory)
            .map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} open={open} setOpen={setOpen} />
            ))
        )}

        {/* Empty State */}
        {!loading &&
          experiences.filter(
            (exp) => selectedCategory === "All" || exp.category === selectedCategory
          ).length === 0 && (
            <div className="h-full flex items-center justify-center text-gray-500">
              No experiences found.
            </div>
          )}
      </div>
    </section>
  );
}

// Skeleton Loader (Shimmer Effect)
const SkeletonLoader = () => (
  <div className="space-y-4">
    {[1, 2, 3].map((key) => (
      <div key={key} className="h-24 bg-gray-200 animate-pulse rounded-lg w-full max-w-[700px] mx-auto"></div>
    ))}
  </div>
);

// Experience Card (Consistent Tailwind Colors)
const ExperienceCard = ({
  exp,
  open,
  setOpen,
}: {
  exp: Experience;
  open: number | null;
  setOpen: (id: number | null) => void;
}) => (
  <div className="border p-6 rounded-lg shadow-md bg-secondary/20 w-full max-w-[700px] mx-auto transition hover:shadow-lg">
    <button
      onClick={() => setOpen(open === exp.id ? null : exp.id)}
      className="w-full flex items-center gap-x-4 flex-wrap"
    >
      <Image
        src={exp.logo}
        alt={exp.title}
        width={48}
        height={48}
        className="w-12 h-12 object-contain flex-shrink-0"
        loading="lazy"
      />

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold text-writingColor">{exp.title}</h3>
        <p className="text-md text-darkAccent hidden md:block">{exp.subtitle}</p>
      </div>

      <svg
        className={`w-6 h-6 transition-transform text-darkAccent ${
          open === exp.id ? "rotate-180" : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    {open === exp.id && (
      <ul className="mt-4 px-6 list-disc list-inside text-gray-700 space-y-2">
        {exp.details.map((point, index) => (
          <li key={index} className="mx-auto w-fit">{point}</li>
        ))}
      </ul>
    )}
  </div>
);
