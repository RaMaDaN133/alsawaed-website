"use client";

import { FaGlobe } from "react-icons/fa";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function LanguageToggle({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  const { toggleLocale, locale } = useLanguage();
  const nextLabel = locale === "ar" ? "EN" : "ع";

  return (
    <button
      onClick={toggleLocale}
      aria-label={locale === "ar" ? "Switch to English" : "التبديل إلى العربية"}
      title={locale === "ar" ? "Switch to English" : "التبديل إلى العربية"}
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-bold transition-all duration-300 ${
        light
          ? "border-white/30 text-white hover:border-gold hover:bg-gold hover:text-navy-900"
          : "border-navy-200 text-navy-700 hover:border-gold hover:bg-gold hover:text-navy-900"
      } ${className}`}
    >
      <FaGlobe className="text-xs" />
      <span>{nextLabel}</span>
    </button>
  );
}
