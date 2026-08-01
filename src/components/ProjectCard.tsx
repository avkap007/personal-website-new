"use client";

import Image from "next/image";
import {
  CATEGORY_ICONS,
  CATEGORY_TAG,
  type Project,
} from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  gridCell?: string;
};

export default function ProjectCard({ project, gridCell }: ProjectCardProps) {
  const Icon = CATEGORY_ICONS[project.category];
  const isPlaceholder = Boolean(project.placeholder);
  const body = project.description ?? project.detail ?? "details coming soon.";
  const tagList = [
    CATEGORY_TAG[project.category],
    ...(project.tags?.slice(0, 2) ?? []),
  ];

  const titleContent = (
    <>
      {project.title}
      {project.date && (
        <span className="font-normal text-writingColor/50"> ({project.date})</span>
      )}
    </>
  );

  return (
    <article
      data-project-id={project.id}
      data-grid-cell={gridCell}
      className={`group flex h-80 w-full min-w-0 flex-col rounded-xl border p-4 font-serif text-writingColor backdrop-blur-sm transition-colors ${
        isPlaceholder
          ? "border-dashed border-writingColor/15 bg-primary/40 hover:border-writingColor/30"
          : "border-writingColor/12 bg-primary/70 hover:border-accent/70"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1 text-[10px] leading-tight">
          {tagList.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-writingColor/[0.06] px-2 py-0.5 uppercase tracking-wide text-writingColor/55"
            >
              {tag}
            </span>
          ))}
        </div>
        {isPlaceholder && (
          <span className="shrink-0 text-[10px] uppercase tracking-wide text-darkAccent/60">
            soon
          </span>
        )}
      </div>

      <div className="mt-3 flex items-start gap-2">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/15">
          <Icon className="h-3 w-3 text-darkAccent" strokeWidth={1.75} />
        </span>
        <h2 className="min-w-0 flex-1 text-sm font-bold leading-snug line-clamp-2">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-writingColor hover:text-darkAccent transition-colors"
            >
              {titleContent}
              <span className="ml-0.5 text-writingColor/45 group-hover:text-darkAccent">↗</span>
            </a>
          ) : (
            titleContent
          )}
        </h2>
      </div>

      {project.image ? (
        <div className="relative mt-3 h-28 w-full shrink-0 overflow-hidden rounded-lg border border-writingColor/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="240px"
          />
        </div>
      ) : (
        <div
          className={`mt-3 flex h-28 w-full shrink-0 items-center justify-center overflow-hidden rounded-lg ${
            isPlaceholder
              ? "border border-dashed border-writingColor/15 bg-writingColor/[0.03]"
              : "border border-writingColor/10 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent"
          }`}
        >
          <Icon
            className={isPlaceholder ? "h-7 w-7 text-writingColor/15" : "h-7 w-7 text-darkAccent/25"}
            strokeWidth={1.25}
          />
        </div>
      )}

      <p className="mt-3 flex-1 overflow-hidden text-xs italic leading-relaxed text-writingColor/75 line-clamp-4">
        {body}
      </p>
    </article>
  );
}
