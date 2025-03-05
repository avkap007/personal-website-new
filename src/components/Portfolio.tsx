"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Define the Type for Projects
type Project = {
  id: number;
  title: string;
  date: string;
  tags: string[];
  description: string;
  image: string;
  link: string;
};

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/data/portfolio.json")
      .then((response) => response.json())
      .then((data: Project[]) => setProjects(data))
      .catch((error) => console.error("Error loading project data:", error));
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-10">Portfolio</h2>

      {/* Scrollable Portfolio List */}
      <div className="min-h-[650px] max-h-[650px] overflow-y-auto space-y-6 px-2">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* ✅ Clickable Image with Proper Rounded Borders */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-[60%] h-[340px] relative rounded-lg overflow-hidden group"
            >
              <div className="w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={720}
                  height={360}
                  className="rounded-lg shadow-md object-cover w-90 h-90 transition-transform duration-300 transform group-hover:scale-105"
                />
              </div>
            </a>

            {/* Project Details */}
            <div className="w-full md:w-[55%]">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-600 text-sm italic">{project.date}</p>

              {/* ✅ Rectangular Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-pink-200 text-accent text-xs font-semibold px-4 py-2 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="h-full flex items-center justify-center text-gray-500">
            No projects found.
          </div>
        )}
      </div>
    </section>
  );
}
