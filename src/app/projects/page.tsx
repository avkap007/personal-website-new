import SiteLayout from "@/components/SiteLayout";

export const metadata = {
  title: "Projects | Avni Kapoor",
  description: "Things I have built.",
};

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <h1 className="text-3xl md:text-4xl font-extrabold">projects</h1>
        <p className="mt-4 text-writingColor/80 max-w-xl">
          cards and filters coming next. this page is the shell.
        </p>
      </section>
    </SiteLayout>
  );
}
