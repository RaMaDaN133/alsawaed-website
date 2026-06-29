"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import Logo from "@/components/ui/Logo";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useT } from "@/components/i18n/LanguageProvider";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useT();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/team", label: t.nav.team },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-md py-2"
          : "bg-white/0 py-4"
      }`}
    >
      <div className="container-section flex items-center justify-between">
        <Logo light={!scrolled} />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-base font-semibold rounded-lg transition-colors ${
                  active
                    ? "text-gold"
                    : scrolled
                    ? "text-navy-700 hover:text-gold"
                    : "text-white/90 hover:text-gold"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageToggle light={!scrolled} />
          <Link href="/contact" className="btn-gold !py-2.5 !px-5 text-base">
            <FaPhoneAlt className="text-xs" />
            {t.common.bookConsultation}
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle light={!scrolled} className="!py-1.5 !px-2.5" />
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center rounded-lg text-xl ${
              scrolled ? "text-navy-900" : "text-white"
            }`}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-0 z-40 bg-navy-900/60 lg:hidden"
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 z-50 h-full w-[78%] max-w-xs bg-navy-900 p-6 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <Logo light />
                <button
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="text-white text-2xl"
                >
                  <FaTimes />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <Link
                        href={link.href}
                        className={`block rounded-lg px-4 py-3 font-semibold transition-colors ${
                          active
                            ? "bg-gold/15 text-gold"
                            : "text-white/90 hover:bg-white/5 hover:text-gold"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <Link
                href="/contact"
                className="btn-gold w-full mt-8"
                onClick={() => setOpen(false)}
              >
                <FaPhoneAlt className="text-xs" />
                {t.common.bookConsultation}
              </Link>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
