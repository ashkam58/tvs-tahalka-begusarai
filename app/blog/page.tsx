'use client';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { useMemo, useState } from 'react';

// export const metadata = {
//   title: 'Blog | Tahalka TVS - Latest Bike News & Service Tips',
//   description: 'Read latest TVS bike reviews, maintenance tips, and automotive insights from Tahalka TVS showroom in Begusarai. Expert advice for bike owners.',
//   keywords: 'TVS bike blog, motorcycle maintenance tips, bike service guide, TVS reviews Begusarai'
// };

const articles = [
  {
    title: '5 Reasons to Choose TVS Apache RTR',
    slug: 'reasons-to-choose-apache-rtr',
    excerpt: 'Discover why the TVS Apache RTR is the perfect bike for performance enthusiasts.',
    date: '2025-09-01',
    tags: ['performance', 'apache']
  },
  {
    title: 'How to Maintain Your TVS Bike',
    slug: 'maintain-your-tvs-bike',
    excerpt: 'Simple tips to keep your TVS bike in top condition.',
    date: '2025-08-15',
    tags: ['maintenance', 'tips']
  },
  {
    title: 'Top 3 TVS Bikes for Daily Commuting',
    slug: 'top-tvs-bikes-daily-commuting',
    excerpt: 'Explore the best TVS bikes for your daily commute.',
    date: '2025-07-20',
    tags: ['commute', 'comparison']
  }
];

type Article = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags?: string[];
};

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    return iso;
  }
}

function estimateReadTime(text: string = ''): string {
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex flex-col h-full rounded-xl border bg-white dark:bg-gray-900 dark:border-gray-800 transition-shadow shadow-sm hover:shadow-lg focus-within:shadow-lg overflow-hidden">
      <Link
        href={`/blog/${article.slug}`}
        className="flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        aria-label={`Read ${article.title}`}
      >
        <div className="relative">
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
            <svg
              className="w-20 h-20 text-gray-300 dark:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="4" width="18" height="14" rx="2" />
              <path d="M8 21h8" />
            </svg>
          </div>
          <div className="absolute top-3 right-3 inline-flex gap-2">
            {article.tags?.slice(0, 2).map((t: string) => (
              <span
                key={t}
                className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full font-medium dark:bg-indigo-900/30 dark:text-indigo-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
            {article.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{article.excerpt}</p>

          <div className="mt-auto flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span>{estimateReadTime(`${article.title} ${article.excerpt}`)}</span>
          </div>
        </div>
      </Link>

      <div className="p-3 border-t dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 flex items-center justify-between">
        <Link
          href={`/blog/${article.slug}`}
          className="text-sm font-medium text-indigo-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-2 py-1"
        >
          Read article
        </Link>
        <span className="text-xs text-gray-500 dark:text-gray-400">Tahalka TVS</span>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let filteredArticles = articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        (a.tags || []).some((t) => t.toLowerCase().includes(q))
    );

    filteredArticles = filteredArticles.sort((a, b) => {
      if (sort === 'oldest') return new Date(a.date).getTime() - new Date(b.date).getTime();
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return filteredArticles;
  }, [query, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      
      
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium mb-4">
              <Calendar className="w-4 h-4" />
              Updated Weekly
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Knowledge Hub for Bike Enthusiasts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From beginner tips to advanced maintenance guides, our experts share insights 
              to help you get the most out of your TVS bike experience.
            </p>
          </div>

          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="relative flex-1">
          <label htmlFor="search" className="sr-only">
            Search blog
          </label>
          <input
            id="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search articles, tags, or keywords..."
            className="w-full rounded-lg border px-4 py-2 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          />
        </div>

        <div className="flex items-center gap-3">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-lg border px-3 py-2 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
            aria-label="Sort articles"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

          <div className="text-sm text-gray-600 dark:text-gray-300">
            {filtered.length} articles
          </div>
        </div>
      </div>

      <section aria-live="polite">
        {filtered.length === 0 ? (
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-8 text-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
              No results
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Try a different search term or clear filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageItems.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        )}
      </section>

      <footer className="mt-8 flex items-center justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          Page {page} of {totalPages}
        </div>

        <nav className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="rounded-md px-3 py-2 text-sm bg-white border hover:bg-gray-50 disabled:opacity-50 dark:bg-gray-900 dark:border-gray-800"
          >
            Prev
          </button>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="rounded-md px-3 py-2 text-sm bg-white border hover:bg-gray-50 disabled:opacity-50 dark:bg-gray-900 dark:border-gray-800"
          >
            Next
          </button>
        </nav>
      </footer>
        </div>
      </section>
    </main>
  );
}