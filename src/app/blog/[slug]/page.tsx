import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPost from "@/components/BlogPost";
import { notFound } from "next/navigation";

type BlogPostData = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  content: string;
};

async function getBlogPost(slug: string): Promise<BlogPostData | null> {
  try {
    // Get metadata
    const indexResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/data/blog-index.json`, {
      cache: 'no-store'
    });
    const posts = await indexResponse.json();
    const postMeta = posts.find((post: any) => post.id === slug);
    
    if (!postMeta) return null;

    // Get content
    const contentResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/data/blog-posts/${slug}.md`, {
      cache: 'no-store'
    });
    const content = await contentResponse.text();

    return {
      ...postMeta,
      content
    };
  } catch (error) {
    console.error("Error loading blog post:", error);
    return null;
  }
}
//using await, cant figure error out rn, try later
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ params }: any) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className="min-h-screen relative text-gray-900">
      <div className="absolute inset-0 animated-lines"></div>
      
      <Navbar />
      
      <section className="pt-24 pb-16">
        <BlogPost post={post} />
      </section>
      
      <Footer />
    </main>
  );
}