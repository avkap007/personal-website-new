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

  const categories = ["Work", "Community", "Research", "All"];

  useEffect(() => {
    fetch("/data/experience.json")
      .then((res) => res.json())
      .then((data: Experience[]) => setExperiences(data))
      .catch((error) => console.error("Error loading experience data:", error));
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-6 text-writingColor">Experience</h2>
      <p className="text-center text-gray-700 text-md max-w-2xl mx-auto mb-8">
      "A little bit of everything, all at once." <br/>
      My experiences range from product, development, data to research and community. 🌿
      </p>

      {/* Category Tabs */}
      <div className="flex justify-center space-x-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedCategory === category
                ? "bg-pink-500 text-white"
                : "bg-pink-100 text-pink-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Scrollable Experience List */}
      <div className="min-h-[600px] max-h-[600px] overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-pink-500 mx-auto max-w-[700px] px-2">
        {experiences
          .filter((exp) => selectedCategory === "All" || exp.category === selectedCategory)
          .map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} open={open} setOpen={setOpen} />
          ))}

        {/* Empty State */}
        {experiences.filter((exp) => selectedCategory === "All" || exp.category === selectedCategory).length === 0 && (
          <div className="h-full flex items-center justify-center text-gray-500">
            No experiences found.
          </div>
        )}
      </div>
    </section>
  );
}

const ExperienceCard = ({ exp, open, setOpen }: { exp: Experience; open: number | null; setOpen: (id: number | null) => void }) => (
  <div className="border p-6 rounded-lg shadow-md bg-pink-200 w-full max-w-[700px] md:min-w-[600px] mx-auto">
    <button onClick={() => setOpen(open === exp.id ? null : exp.id)} className="w-full flex items-center gap-x-4 flex-wrap">
      <Image src={exp.logo} alt={exp.title} width={48} height={48} className="w-12 h-12 object-contain flex-shrink-0" />

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold break-words">{exp.title}</h3>
        <p className="text-md text-gray-700">{exp.subtitle}</p>
      </div>

      <svg
        className={`w-6 h-6 transition-transform ${open === exp.id ? "rotate-180" : ""}`}
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
