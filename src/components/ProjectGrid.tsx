"use client";

import { useEffect, useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  CATEGORIES,
  type Project,
  type ProjectCategory,
} from "@/lib/projects";

type Filter = "all" | ProjectCategory;

const GRID_CLASS =
  "grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4";

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
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-medium text-writingColor/45">
          filter
        </span>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className={`px-3 py-1 rounded-full text-sm font-medium font-serif border transition ${
                filter === id
                  ? "bg-writingColor text-primary border-writingColor"
                  : "bg-transparent text-writingColor border-writingColor/25 hover:border-writingColor/50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className={GRID_CLASS}>
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className="h-52 w-full rounded-xl bg-accent/15 animate-pulse"
              aria-hidden
            />
          ))}
        </div>
      ) : (
        <div id="project-grid" className={GRID_CLASS}>
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              gridCell={`${index}`}
            />
          ))}
        </div>
      )}

      {!loading && filtered.length === 0 && (
        <p className="text-writingColor/60 text-center py-12">
          no projects in this category yet.
        </p>
      )}

      <p className="text-xs text-writingColor/45 text-center pt-2 font-serif">
        press{" "}
        <kbd className="px-1.5 py-0.5 rounded bg-writingColor/5 font-serif text-[11px]">P</kbd>{" "}
        for pac-man around the grid · coming soon
      </p>
    </div>
  );
}
