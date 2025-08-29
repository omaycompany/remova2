'use client';

import { useState } from 'react';
import Link from 'next/link';

type Post = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
};

interface RecentPostsListProps {
  posts: Post[];
  initialCount?: number;
  increment?: number;
}

export default function RecentPostsList({ posts, initialCount = 6, increment = 6 }: RecentPostsListProps) {
  const [visibleCount, setVisibleCount] = useState(Math.min(initialCount, posts.length));

  const visiblePosts = posts.slice(0, visibleCount);
  const canLoadMore = visibleCount < posts.length;

  return (
    <>
      <div className="space-y-6">
        {visiblePosts.map((post) => (
          <article key={post.id} className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                  {post.category}
                </span>
                <span>{post.author}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-indigo-600 transition-colors">
                <Link href={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <Link href={`/blog/${post.id}`} className="btn btn-sm btn-outline border-gray-300 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white transition-all">
                Read More
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {canLoadMore && (
        <div className="text-center mt-12">
          <button
            type="button"
            className="btn btn-lg btn-outline border-gray-300 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white transition-all font-bold px-8"
            onClick={() => setVisibleCount(Math.min(visibleCount + increment, posts.length))}
          >
            Load More Articles
          </button>
        </div>
      )}
    </>
  );
}


