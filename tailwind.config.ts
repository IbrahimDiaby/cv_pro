import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fromTop: { to: { top: 0, opacity: 0 } },
        toTop: { to: { top: -100, } },
        fromBottom: { to: { bottom: 0, } },
        toBottom: { to: { top: -100, } },
      },
      animation: {
        fromTop: 'fromTop 2s linear 1',
        toTop: 'toTop 2s linear 1',
        fromBottom: 'fromBottom 2s linear 1',
        toBottom: 'toBottom 2s linear 1',
      },
    },
  },
  plugins: [],
} satisfies Config;
