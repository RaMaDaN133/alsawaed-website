"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import { useT } from "@/components/i18n/LanguageProvider";

export default function FAQ() {
  const t = useT();
  const faqs = t.faq.items;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding bg-navy-50/40">
      <div className="container-section">
        <SectionHeading
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          subtitle={t.faq.subtitle}
        />

        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const active = open === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                  active ? "border-gold/60 shadow-card" : "border-navy-100"
                }`}
              >
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-right"
                  aria-expanded={active}
                >
                  <span className="font-bold text-navy-900">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      active
                        ? "rotate-45 bg-gold text-navy-900"
                        : "bg-navy-50 text-navy-700"
                    }`}
                  >
                    <FaPlus className="text-sm" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 leading-relaxed text-navy-500">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
