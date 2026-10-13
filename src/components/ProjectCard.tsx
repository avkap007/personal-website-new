"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import {
  CATEGORY_ICONS,
  type Project,
} from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  gridCell?: string;
};

// Default action labels based on category
const DEFAULT_ACTIONS: Record<string, string> = {
  research: "View Research",
  projects: "View Project",
  community: "Learn More",
  presentations: "View Presentation",
};

// Check if a file is a video based on extension
const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

export default function ProjectCard({ project, gridCell }: ProjectCardProps) {
  const Icon = CATEGORY_ICONS[project.category];
  const isPlaceholder = Boolean(project.placeholder);
  const tagList = project.tags?.slice(0, 2) ?? [];
  const actionLabel = project.actionLabel || DEFAULT_ACTIONS[project.category] || "View";
  
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [inView, setInView] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Determine which media source to use
  const videoSrc = project.gif && isVideo(project.gif) ? project.gif : null;
  const posterSrc = project.image || (project.gif && !isVideo(project.gif) ? project.gif : null);
  const hasVideo = Boolean(videoSrc);
  const hasMedia = Boolean(posterSrc || videoSrc);

  // Play while the card is on screen, pause once it scrolls away
  useEffect(() => {
    const node = cardRef.current;
    if (!node || !hasVideo) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [hasVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasVideo) return;

    if (inView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, hasVideo]);

  const cardContent = (
    <article
      ref={cardRef}
      data-project-id={project.id}
      data-grid-cell={gridCell}
      className="group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Media container - natural dimensions */}
      <div className="relative overflow-hidden rounded-xl bg-white/60 dark:bg-white/5 t-card-lift">
        {hasMedia ? (
          <>
            {/* Video or GIF/Image */}
            {hasVideo ? (
              <video
                ref={videoRef}
                src={videoSrc}
                muted
                loop
                playsInline
                poster={posterSrc || undefined}
                className="w-full h-auto block"
              />
            ) : posterSrc && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={posterSrc}
                alt={project.title}
                className="w-full h-auto block"
              />
            )}
          </>
        ) : (
          <div className={`aspect-[4/3] flex items-center justify-center ${
            isPlaceholder ? "bg-writingColor/[0.02]" : "bg-gradient-to-br from-accent/10 to-transparent"
          }`}>
            <Icon
              className={`h-10 w-10 ${isPlaceholder ? "text-writingColor/10" : "text-writingColor/20"}`}
              strokeWidth={1}
            />
          </div>
        )}
        
        {/* Badge at top-left - always show if present */}
        {project.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="text-xs px-3 py-1.5 rounded-full bg-white/90 text-writingColor/90 backdrop-blur-sm shadow-sm font-medium">
              {project.badge}
            </span>
          </div>
        )}
        
        {/* Soon badge for placeholders */}
        {isPlaceholder && (
          <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full bg-white/80 text-writingColor/50">
            soon
          </span>
        )}
        
        {/* Tags at bottom-left - on hover */}
        {hasMedia && (
          <div 
            className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ transitionTimingFunction: "var(--ease-smooth-out)" }}
          >
            {tagList.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2.5 py-1 rounded-full bg-white/90 text-writingColor/80 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Action pill - follows mouse with offset */}
        {project.link && !isPlaceholder && hasMedia && (
          <div 
            className="pointer-events-none absolute transition-opacity duration-150"
            style={{ 
              left: mousePos.x + 12,
              top: mousePos.y + 12,
              opacity: isHovering ? 1 : 0,
            }}
          >
            <span className="text-xs px-3 py-1.5 rounded-full bg-black text-white font-medium shadow-lg whitespace-nowrap">
              {actionLabel}
            </span>
          </div>
        )}
      </div>

      {/* Title below */}
      <div className="mt-3 px-1">
        <p className="text-sm text-writingColor">{project.title}</p>
      </div>
    </article>
  );

  // Wrap with link if available
  if (project.link && !isPlaceholder) {
    if (project.link.startsWith("/")) {
      return <Link href={project.link} className="block">{cardContent}</Link>;
    }
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
