"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import ArticleCard from "@/components/ui/ArticleCard";
import { articles, categories } from "@/lib/data";
import { stagger } from "@/lib/motion";

export default function BlogList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("الكل");

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory = category === "الكل" || a.category === category;
      const q = query.trim();
      const matchesQuery =
        q === "" ||
        a.title.includes(q) ||
        a.excerpt.includes(q) ||
        a.category.includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section className="section-padding bg-white">
      <div className="container-section">
        {/* Toolbar */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-sm">
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-navy-300" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث في المقالات..."
              className="w-full rounded-full border border-navy-200 bg-white py-3 pr-11 pl-4 text-navy-900 outline-none transition-colors placeholder:text-navy-300 focus:border-gold focus:ring-2 focus:ring-gold/30"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  category === cat
                    ? "bg-gold text-navy-900"
                    : "bg-navy-50 text-navy-600 hover:bg-navy-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <motion.div
            key={`${category}-${query}`}
            variants={stagger}
            initial="hidden"
            animate="show"
            className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </motion.div>
        ) : (
          <div className="mt-16 text-center">
            <p className="text-lg text-navy-500">
              لا توجد مقالات مطابقة لبحثك. حاول بكلمات أخرى.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
