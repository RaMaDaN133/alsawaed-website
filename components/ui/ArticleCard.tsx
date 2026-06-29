"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaRegClock, FaRegCalendarAlt, FaArrowLeft } from "react-icons/fa";
import { Article } from "@/lib/types";
import { fadeUp } from "@/lib/motion";
import { formatDate } from "@/lib/utils";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card border border-navy-100/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-gold"
    >
      <Link href={`/blog/${article.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy-900">
          {article.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 text-xs text-navy-400">
          <span className="flex items-center gap-1.5">
            <FaRegCalendarAlt className="text-gold" />
            {formatDate(article.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <FaRegClock className="text-gold" />
            {article.readTime}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold leading-snug text-navy-900 transition-colors group-hover:text-gold">
          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-500">
          {article.excerpt}
        </p>

        <Link
          href={`/blog/${article.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold"
        >
          اقرأ المقال
          <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
