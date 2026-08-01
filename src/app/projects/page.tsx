import SiteLayout from "@/components/SiteLayout";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata = {
  title: "Projects | Avni Kapoor",
  description: "Research, builds, community, and talks.",
};

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="w-full max-w-[1600px] mx-auto px-3 sm:px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold font-serif leading-tight">
          projects
          <span className="text-writingColor/35 font-normal"> & </span>
          portfolio
        </h1>
        <p className="mt-3 text-writingColor/75 max-w-xl text-sm md:text-base font-serif">
          what i&apos;m up to, and some of what i&apos;ve been up to in the past.
        </p>
        <div className="mt-10">
          <ProjectGrid />
        </div>
      </section>
    </SiteLayout>
  );
}
