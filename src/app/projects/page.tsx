import SiteLayout from "@/components/SiteLayout";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata = {
  title: "Projects | Avni Kapoor",
  description: "Work, research, community, and side quests.",
};

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold font-serif leading-tight">
          projects
          <span className="text-writingColor/35 font-normal"> & </span>
          portfolio
        </h1>
        <p className="mt-3 text-writingColor/75 max-w-xl text-sm md:text-base font-serif">
          work, research, community, and many side quests.
        </p>
        <div className="mt-10">
          <ProjectGrid />
        </div>
      </section>
    </SiteLayout>
  );
}
