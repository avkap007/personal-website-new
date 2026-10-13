"use client";

import { useEffect, useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  CATEGORIES,
  type Project,
  type ProjectCategory,
} from "@/lib/projects";

type Filter = "all" | ProjectCategory;

export default function ProjectGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((r) => r.json())
      .then((data: Project[]) => setProjects(data))
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [projects, filter]);

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-medium text-writingColor/40">
          filter
        </span>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === id
                  ? "bg-writingColor text-primary"
                  : "bg-transparent text-writingColor/60 hover:text-writingColor hover:bg-writingColor/5"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      {loading ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className="h-64 w-full rounded-2xl bg-writingColor/5 animate-pulse break-inside-avoid"
              aria-hidden
            />
          ))}
        </div>
      ) : (
        <div 
          id="project-grid" 
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {filtered.map((project, index) => (
            <div key={project.id} className="break-inside-avoid">
              <ProjectCard
                project={project}
                gridCell={`${index}`}
              />
            </div>
          ))}
        </div>
      )}

      {!loading && filtered.length === 0 && (
        <p className="text-writingColor/50 text-center py-12">
          no projects in this category yet.
        </p>
      )}
    </div>
  );
}
