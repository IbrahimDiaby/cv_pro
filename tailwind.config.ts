import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  // darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        typing: {
          "0%": { color: "yellow", maxWidth: "0px", overflow: "hidden" },
          "100%": { color: "green", maxWidth: "200px" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        wiggle: "wiggle 1s ease-in-out infinite",
        typing: "typing 4s steps(20) 100ms infinite alternate both",
      },
    },
  },
  plugins: [],
} satisfies Config;
