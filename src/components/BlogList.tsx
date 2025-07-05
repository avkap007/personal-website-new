"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type BlogPost = {
  id: string;
  title: string;
  url: string;
  date: string;
  readTime: string;
  cover: string;
  excerpt: string;
  tags: string[];
};

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/blog-index.json")
      .then((response) => response.json())
      .then((data: BlogPost[]) => {
        // Sort posts by date (newest first)
        const sortedPosts = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPosts(sortedPosts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading blog data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-8 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-writingColor mb-6">
          stuff i've written
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          this section is currently a work in progress. thoughts on product, tech, life, and everything in between ✍️
        </p>
      </div>

      {/* Blog Posts - Notion-style list */}
      <div className="space-y-4">
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((key) => (
              <div key={key} className="h-20 bg-gray-200 animate-pulse rounded-lg"></div>
            ))}
          </div>
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500 mb-4">coming soon!</p>
            <p className="text-gray-600">I'm working on some great content. Check back soon! 🚧</p>
          </div>
        )}
      </div>
    </div>
  );
}

const BlogPostCard = ({ post }: { post: BlogPost }) => (
  <a href={post.url} target="_blank" rel="noopener noreferrer">
    <article className="bg-white/50 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all border border-gray-200 hover:border-accent cursor-pointer">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-writingColor hover:text-accent transition mb-2">
            {post.title}
          </h2>
          <p className="text-gray-700 mb-3 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-accent text-darkAccent text-xs font-medium px-3 py-1 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-600 mt-2 md:mt-0 md:ml-6">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  </a>
);