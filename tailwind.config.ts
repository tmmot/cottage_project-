import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Trebuchet MS'", "'Segoe UI'", "sans-serif"],
        body: ["'Segoe UI'", "sans-serif"],
      },
      colors: {
        cottage: {
          bg: "#f6efe7",
          wood: "#8a6045",
          floor: "#d5b18d",
          rug: "#f2d4a8",
          lamp: "#d5d99f",
          accent: "#377e7a",
          peach: "#f7cfa5",
          sun: "#f4d59d",
          rose: "#d88f8a",
          dark: "#2d2a2a",
          cream: "#fffaf3",
          moss: "#576f5d",
        },
      },
      boxShadow: {
        cozy: "0 12px 35px rgba(31, 22, 17, 0.18)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        floaty: "floaty 3.2s ease-in-out infinite",
        pulseSoft: "pulseSoft 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
