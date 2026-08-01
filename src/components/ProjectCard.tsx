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

function cardCopy(project: Project) {
  if (project.description) return project.description;
  if (project.detail) return project.detail;
  return "details coming soon.";
}

export default function ProjectCard({ project, gridCell }: ProjectCardProps) {
  const Icon = CATEGORY_ICONS[project.category];
  const body = cardCopy(project);
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
      className="group flex h-full w-full min-w-0 flex-col rounded-xl border border-writingColor/12 bg-white/70 backdrop-blur-sm p-4 font-serif text-writingColor hover:border-accent/70 transition-colors"
    >
      <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 text-[10px] leading-tight text-writingColor/55">
        {tagList.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>

      <div className="mt-3 flex items-start gap-2">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/15">
          <Icon className="h-3 w-3 text-darkAccent" strokeWidth={1.75} />
        </span>
        <h2 className="min-w-0 flex-1 text-sm font-bold leading-snug">
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

      {project.image && (
        <div className="relative mt-3 h-16 w-full overflow-hidden rounded-md border border-writingColor/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="240px"
          />
        </div>
      )}

      <p className="mt-3 text-xs leading-relaxed text-writingColor/75 italic flex-1">
        {body}
      </p>
    </article>
  );
}
