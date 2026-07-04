import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0D0F",
        paper: "#EAEAE7",
        muted: "#8A8F98",
        hairline: "#232629",
        panel: "#131518",
        steel: "#5B7FB8",
        steeldim: "#3E5578",
        signal: "#4ADE80",
        alert: "#E5654A",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        wide: "0.08em",
        widest: "0.16em",
      },
      maxWidth: {
        content: "1160px",
      },
      keyframes: {
        flip: {
          "0%": { opacity: "0", transform: "translateY(2px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
      animation: {
        flip: "flip 0.4s ease-out forwards",
        blink: "blink 1.2s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
