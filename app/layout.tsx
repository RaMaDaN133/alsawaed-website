import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

const siteName = "مكتب السواعد للمحاماة والاستشارات القانونية والتحكيم";

export const metadata: Metadata = {
  metadataBase: new URL("https://sawaaed-law.com"),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "مكتب السواعد للمحاماة والاستشارات القانونية والتحكيم — خبرة قانونية وحلول احترافية لحماية حقوقكم في القضايا المدنية والتجارية والجنائية والأحوال الشخصية والتحكيم.",
  keywords: [
    "محاماة",
    "استشارات قانونية",
    "تحكيم تجاري",
    "محامي",
    "قضايا مدنية",
    "قضايا تجارية",
    "أحوال شخصية",
    "مكتب السواعد",
  ],
  authors: [{ name: "مكتب السواعد للمحاماة" }],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    title: siteName,
    description:
      "خبرة قانونية وحلول احترافية لحماية حقوقكم. استشارات قانونية، تحكيم، وتمثيل أمام كافة الجهات القضائية.",
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`}>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
