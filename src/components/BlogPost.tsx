"use client";

import Link from "next/link";

type BlogPostProps = {
  post: {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
    readTime: string;
    content: string;
  };
};

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="w-full max-w-4xl mx-auto px-8 md:px-20">
      {/* Back to Blog Link */}
      <Link 
        href="/blog"
        className="inline-flex items-center text-accent hover:text-darkAccent transition mb-8"
      >
        ← Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-writingColor mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-gray-600 mb-4 flex-wrap">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-accent text-darkAccent text-sm font-medium px-3 py-1 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-lg text-gray-700 italic border-l-4 border-accent pl-4">
          {post.excerpt}
        </p>
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-writingColor">
        <MarkdownContent content={post.content} />
      </div>

      {/* Back to Blog (Bottom) */}
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-block px-6 py-3 rounded-lg text-med font-medium transition-all bg-accent text-darkAccent hover:bg-darkAccent hover:text-white"
        >
          ← Back to Blog
        </Link>
      </div>
    </article>
  );
}

// Simple markdown-like content renderer
const MarkdownContent = ({ content }: { content: string }) => {
  const lines = content.split('\n');
  
  return (
    <div className="space-y-4">
      {lines.map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold text-writingColor mt-8 mb-4">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-writingColor mt-6 mb-3">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-bold text-writingColor mt-4 mb-2">{line.slice(4)}</h3>;
        }
        
        // Bold text
        if (line.startsWith('**') && line.endsWith('**')) {
          return <p key={index} className="font-bold text-writingColor">{line.slice(2, -2)}</p>;
        }
        
        // Lists
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-4 text-gray-700">{line.slice(2)}</li>;
        }
        
        // Numbers
        if (/^\d+\./.test(line)) {
          return <li key={index} className="ml-4 text-gray-700 list-decimal">{line.replace(/^\d+\.\s/, '')}</li>;
        }
        
        // Empty lines
        if (line.trim() === '') {
          return <div key={index} className="h-4"></div>;
        }
        
        // Regular paragraphs
        return <p key={index} className="text-gray-700 leading-relaxed">{line}</p>;
      })}
    </div>
  );
};