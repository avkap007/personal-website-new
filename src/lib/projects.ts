import {
  FlaskConical,
  Hammer,
  Mic,
  Users,
  type LucideIcon,
} from "lucide-react";

export type ProjectCategory =
  | "research"
  | "projects"
  | "community"
  | "presentations";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  date?: string;
  tags?: string[];
  description?: string;
  image?: string;
  /** Animated GIF or video version of image */
  gif?: string;
  /** On viewports below `md`, show `image` instead of the video in `gif` */
  stillOnMobile?: boolean;
  link?: string;
  placeholder?: boolean;
  detail?: string;
  /** Custom action label for hover pill (e.g., "View Presentation") */
  actionLabel?: string;
  /** Card size for masonry: "sm" | "md" | "lg" */
  size?: "sm" | "md" | "lg";
  /** Award badge to display on card (e.g., "🏆 Swift Student Challenge Winner") */
  badge?: string;
};

export const CATEGORIES: {
  id: ProjectCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "all" },
  { id: "research", label: "research" },
  { id: "projects", label: "projects" },
  { id: "community", label: "community" },
  { id: "presentations", label: "presentations" },
];

export const CATEGORY_ICONS: Record<ProjectCategory, LucideIcon> = {
  research: FlaskConical,
  projects: Hammer,
  community: Users,
  presentations: Mic,
};

export const CATEGORY_TAG: Record<ProjectCategory, string> = {
  research: "research",
  projects: "build",
  community: "community",
  presentations: "talk",
};
