"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar, FaQuoteRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import { useT } from "@/components/i18n/LanguageProvider";

export default function Testimonials() {
  const t = useT();
  const testimonials = t.testimonials.items;
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const current = testimonials[index];

  return (
    <section className="section-padding bg-white">
      <div className="container-section">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        <div className="relative mx-auto mt-10 max-w-3xl">
          <FaQuoteRight className="absolute -top-6 right-0 text-7xl text-gold/15" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-navy-50/50 p-8 md:p-12 text-center"
            >
              <div className="flex justify-center gap-1 text-gold">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="mt-6 text-lg leading-relaxed text-navy-700 md:text-xl">
                “{current.content}”
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-gold">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="text-right">
                  <p className="font-bold text-navy-900">{current.name}</p>
                  <p className="text-sm text-gold">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="السابق"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy-200 text-navy-700 transition-colors hover:border-gold hover:bg-gold hover:text-navy-900"
            >
              <FaChevronRight />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`الرأي ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-gold" : "w-2.5 bg-navy-200"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="التالي"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy-200 text-navy-700 transition-colors hover:border-gold hover:bg-gold hover:text-navy-900"
            >
              <FaChevronLeft />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
