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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/portfolio.json")
      .then((response) => response.json())
      .then((data: Project[]) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error loading project data:", error));
  }, []);

  return (
    <section id="portfolio" className="w-full max-w-5xl mx-auto px-4 py-20">
      {/* Section Title */}
      <h1 className="text-3xl font-extrabold text-center mb-6 text-writingColor">
        Portfolio
      </h1>

      <p className="text-center text-gray-700 text-md max-w-2xl mx-auto mb-8">
        Here’s a showcase of my design, development, and product skills through some projects I’ve worked on recently. 🏗️
      </p>

      {/* Project List (No Scrollbox) */}
      <div className="space-y-12">
        {loading ? (
          <SkeletonLoader />
        ) : (
          projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} reversed={index % 2 === 1} />
          ))
        )}

        {/* Empty State */}
        {!loading && projects.length === 0 && (
          <div className="h-full flex items-center justify-center text-gray-500">
            No projects found.
          </div>
        )}
      </div>
    </section>
  );
}

// Skeleton Loader (For Loading State)
const SkeletonLoader = () => (
  <div className="space-y-6">
    {[1, 2, 3].map((key) => (
      <div key={key} className="h-72 bg-gray-200 animate-pulse rounded-lg w-full max-w-[700px] mx-auto"></div>
    ))}
  </div>
);

// Project Card Component
const ProjectCard = ({
  project,
  reversed,
}: {
  project: Project;
  reversed: boolean;
}) => (
  <div
    className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
      reversed ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* ✅ Clickable Image */}
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full md:w-[60%] h-[340px] relative rounded-xl overflow-hidden group"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={720}
        height={360}
        className="rounded-xl shadow-md object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
        loading="lazy"
      />
    </a>

    {/* ✅ Project Details */}
    <div className="w-full md:w-[55%]">
      <h3 className="text-2xl font-bold text-writingColor">{project.title}</h3>
      <p className="text-darkAccent text-sm italic">{project.date}</p>

      {/* ✅ Consistent Tag Styling (Matches Buttons) */}
      <div className="flex flex-wrap gap-2 mt-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-accent text-darkAccent text-xs font-medium px-3 py-1 rounded-lg"
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
);
