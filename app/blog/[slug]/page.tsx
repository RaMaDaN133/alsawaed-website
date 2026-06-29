import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FaRegClock,
  FaRegCalendarAlt,
  FaRegUser,
  FaArrowRight,
} from "react-icons/fa";
import { articles } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import ArticleCard from "@/components/ui/ArticleCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "المقال غير موجود" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);
  const fallback = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const relatedArticles = related.length > 0 ? related : fallback;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-navy-900">
        <div className="container-section">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-300"
          >
            <FaArrowRight className="text-xs" />
            العودة إلى المقالات
          </Link>
          <span className="mt-6 inline-block rounded-full bg-gold px-4 py-1 text-xs font-bold text-navy-900">
            {article.category}
          </span>
          <h1 className="mt-4 max-w-3xl font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
            {article.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-navy-200">
            <span className="flex items-center gap-2">
              <FaRegUser className="text-gold" />
              {article.author}
            </span>
            <span className="flex items-center gap-2">
              <FaRegCalendarAlt className="text-gold" />
              {formatDate(article.date)}
            </span>
            <span className="flex items-center gap-2">
              <FaRegClock className="text-gold" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="section-padding bg-white">
        <div className="container-section max-w-3xl">
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl shadow-card">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-navy-700">
            {article.content.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Author box */}
          <div className="mt-12 flex items-center gap-4 rounded-2xl bg-navy-50/60 p-6">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-xl text-gold">
              <FaRegUser />
            </span>
            <div>
              <p className="text-sm text-navy-400">بقلم</p>
              <p className="font-bold text-navy-900">{article.author}</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      {relatedArticles.length > 0 && (
        <section className="section-padding bg-navy-50/40">
          <div className="container-section">
            <h2 className="text-2xl font-bold text-navy-900">مقالات ذات صلة</h2>
            <div className="gold-line mt-4" />
            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
