export type Writing = {
  id: string;
  title: string;
  href: string;
  external: boolean;
  date?: string;
  excerpt?: string;
};

export const WRITINGS: Writing[] = [
  {
    id: "tech-internship-advice",
    title: "in honour of advice season: some tangible pieces of advice for tech internships",
    href: "/writings/tech-internship-advice",
    external: false,
    date: "August 2026",
  },
  {
    id: "how-i-get-a-lot-done",
    title: "how i get a lot done (without going under)",
    href: "https://medium.com/@avnikapoor_/how-i-get-a-lot-done-without-going-under-11ca232bfda9",
    external: true,
    date: "March 2025",
  },
  {
    id: "progress-work",
    title: "who does \"progress\" work for?",
    href: "https://substack.com/home/post/p-189372221",
    external: true,
  },
  {
    id: "having-a-think",
    title: "whatever happened to having a think?",
    href: "https://substack.com/home/post/p-186461711",
    external: true,
  },
  {
    id: "either-or-quotes",
    title: "my favourite quotes from either/or",
    href: "https://substack.com/@avnisays",
    external: true,
    excerpt: "ongoing",
  },
  {
    id: "travelogue-uk-26",
    title: "travelogue - uk '26",
    href: "#",
    external: false,
    excerpt: "coming soon",
  },
  {
    id: "travelogue-uk-xmas-25",
    title: "travelogue - uk '25 xmas",
    href: "#",
    external: false,
    excerpt: "coming soon",
  },
  {
    id: "travelogue-china-26",
    title: "travelogue - china '26",
    href: "#",
    external: false,
    excerpt: "coming soon",
  },
  {
    id: "travelogue-vietnam-26",
    title: "travelogue - vietnam '26",
    href: "#",
    external: false,
    excerpt: "coming soon",
  },
  {
    id: "travelogue-india-25",
    title: "travelogue (ish) - india '25",
    href: "#",
    external: false,
    excerpt: "coming soon",
  },
];
