import Navbar from "@/components/Navbar";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen relative text-gray-900">
      {/* Background */}
      <div className="absolute inset-0 animated-lines"></div>

      <Navbar />

      {/* Blog Section */}
      <section className="pt-24 pb-16">
        <BlogList />
      </section>

      <Footer />
    </main>
  );
}