import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F7F3EC",
          dark: "#EDE6DB",
          light: "#FBF8F3",
        },
        terracotta: {
          DEFAULT: "#C97B5A",
          dark: "#B8654A",
          light: "#E8C4B0",
        },
        olive: {
          DEFAULT: "#6B7A4F",
          dark: "#556240",
          light: "#A3B08A",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          muted: "#5C5C5C",
          soft: "#8A8A8A",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        soft: "1rem",
        softer: "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(26, 26, 26, 0.06)",
        lift: "0 12px 40px rgba(26, 26, 26, 0.1)",
        card: "0 2px 16px rgba(26, 26, 26, 0.04)",
      },
      keyframes: {
        pulseScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        pulseScale: "pulseScale 2.5s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
