import SiteLayout from "@/components/SiteLayout";

export const metadata = {
  title: "Writings | Avni Kapoor",
  description: "Essays and notes.",
};

export default function WritingsPage() {
  return (
    <SiteLayout>
      <section className="max-w-2xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <h1 className="text-3xl md:text-4xl font-extrabold">writings</h1>
        <p className="mt-4 text-writingColor/80">
          simple list coming next. the site will hold the full archive.
        </p>
      </section>
    </SiteLayout>
  );
}
