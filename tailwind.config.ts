import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F172A",
          50: "#f4f6fb",
          100: "#e7ebf4",
          200: "#c5cee2",
          300: "#9eabc9",
          400: "#5f739c",
          500: "#374a73",
          600: "#243558",
          700: "#1a2742",
          800: "#13203a",
          900: "#0F172A",
          950: "#080d1a",
        },
        gold: {
          DEFAULT: "#C9A227",
          50: "#fbf8ef",
          100: "#f5edd2",
          200: "#ecd9a0",
          300: "#e0bf66",
          400: "#d6ab3f",
          500: "#C9A227",
          600: "#a87e20",
          700: "#855e1e",
          800: "#704c20",
          900: "#603f20",
        },
      },
      fontFamily: {
        sans: ["var(--font-cairo)", "system-ui", "sans-serif"],
        heading: ["var(--font-tajawal)", "var(--font-cairo)", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
        screens: {
          "2xl": "1280px",
        },
      },
      boxShadow: {
        gold: "0 10px 40px -10px rgba(201, 162, 39, 0.35)",
        card: "0 12px 40px -12px rgba(15, 23, 42, 0.18)",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(rgba(15,23,42,0.86), rgba(15,23,42,0.92)), url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop')",
        "gold-gradient":
          "linear-gradient(135deg, #C9A227 0%, #e0bf66 50%, #C9A227 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
