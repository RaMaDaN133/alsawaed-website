"use client";

import Link from "next/link";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronLeft,
} from "react-icons/fa";
import Logo from "@/components/ui/Logo";
import { siteConfig } from "@/lib/data";
import { useT } from "@/components/i18n/LanguageProvider";

const socials = [
  { href: siteConfig.socials.twitter, icon: FaTwitter, label: "Twitter" },
  { href: siteConfig.socials.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
  { href: siteConfig.socials.facebook, icon: FaFacebookF, label: "Facebook" },
  { href: siteConfig.socials.instagram, icon: FaInstagram, label: "Instagram" },
  { href: siteConfig.socials.whatsapp, icon: FaWhatsapp, label: "WhatsApp" },
];

export default function Footer() {
  const t = useT();
  const quickLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/team", label: t.nav.team },
    { href: "/contact", label: t.nav.contact },
  ];
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="container-section py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <Logo light />
            <p className="mt-5 text-sm leading-relaxed text-navy-200">
              {t.brand.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-navy-100 transition-all hover:bg-gold hover:text-navy-900 hover:-translate-y-1"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2 text-sm text-navy-200 transition-colors hover:text-gold"
                  >
                    <FaChevronLeft className="text-[10px] text-gold transition-transform group-hover:-translate-x-1" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">
              {t.footer.ourServices}
            </h3>
            <ul className="space-y-3">
              {t.services.items.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/services"
                    className="group flex items-center gap-2 text-sm text-navy-200 transition-colors hover:text-gold"
                  >
                    <FaChevronLeft className="text-[10px] text-gold transition-transform group-hover:-translate-x-1" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5">
              {t.footer.contactUs}
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-gold shrink-0" />
                <span className="text-navy-200">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-gold shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  dir="ltr"
                  className="text-navy-200 transition-colors hover:text-gold"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-navy-200 transition-colors hover:text-gold"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-section flex flex-col items-center justify-between gap-3 py-6 text-center text-sm text-navy-300 md:flex-row">
          <p>
            © {new Date().getFullYear()} {t.brand.name}. {t.footer.rights}
          </p>
          <p>
            {t.footer.madeWith} <span className="text-gold">♦</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
