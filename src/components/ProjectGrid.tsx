"use client";

import { useEffect, useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import { ResearchCard, researchItems } from "./ResearchCards";
import {
  CATEGORIES,
  type Project,
  type ProjectCategory,
} from "@/lib/projects";

type Filter = "all" | ProjectCategory;

type Cell =
  | { key: string; category: string; win: boolean; kind: "research"; item: (typeof researchItems)[number]; index: number }
  | { key: string; category: string; win: boolean; kind: "project"; project: Project };

/** Wins land in the first half. Everything else is round-robin by category so research, talks, and builds are mixed. */
function scatter(cells: Cell[]): Cell[] {
  const wins = cells.filter((cell) => cell.win);
  const buckets = new Map<string, Cell[]>();
  for (const cell of cells) {
    if (cell.win) continue;
    const bucket = buckets.get(cell.category) ?? [];
    bucket.push(cell);
    buckets.set(cell.category, bucket);
  }

  const rest: Cell[] = [];
  const keys = [...buckets.keys()];
  let pulled = true;
  while (pulled) {
    pulled = false;
    for (const key of keys) {
      const next = buckets.get(key)?.shift();
      if (!next) continue;
      rest.push(next);
      pulled = true;
    }
  }

  const half = Math.ceil(cells.length / 2);
  const mixed: Cell[] = [];
  let winIndex = 0;
  let restIndex = 0;
  while (winIndex < wins.length || restIndex < rest.length) {
    const preferWin =
      mixed.length < half &&
      winIndex < wins.length &&
      (mixed.length % 2 === 0 || restIndex >= rest.length);
    if (preferWin) mixed.push(wins[winIndex++]);
    else if (restIndex < rest.length) mixed.push(rest[restIndex++]);
    else mixed.push(wins[winIndex++]);
  }
  return mixed;
}

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

  const cells = useMemo(() => {
    const researchCells: Cell[] =
      filter === "all" || filter === "research"
        ? researchItems.map((item, index) => ({
            key: item.title,
            category: "research",
            win: false,
            kind: "research" as const,
            item,
            index,
          }))
        : [];
    const projectCells: Cell[] = projects
      .filter((project) => project.category !== "research")
      .filter((project) => filter === "all" || project.category === filter)
      .map((project) => ({
        key: project.id,
        category: project.category,
        win: Boolean(project.badge),
        kind: "project" as const,
        project,
      }));
    return scatter([...researchCells, ...projectCells]);
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
          {cells.map((cell) => (
            <div key={cell.key} className="break-inside-avoid">
              {cell.kind === "research" ? (
                <ResearchCard item={cell.item} index={cell.index} />
              ) : (
                <ProjectCard project={cell.project} />
              )}
            </div>
          ))}
        </div>
      )}

      {!loading && cells.length === 0 && (
        <p className="text-writingColor/50 text-center py-12">
          no projects in this category yet.
        </p>
      )}
    </div>
  );
}
