import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0f1f3d",
          mid: "#1a3260",
          light: "#243a72",
        },
        gold: {
          DEFAULT: "#b5892a",
          light: "#cfa84e",
          pale: "#f5eddb",
        },
        cream: "#f7f4ee",
        muted: "#6b7280",
        subtle: "#9ca3af",
        border: {
          DEFAULT: "#e5e0d5",
          dark: "rgba(15,31,61,0.12)",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["10px", { lineHeight: "1.4" }],
        "3xs": ["9px", { lineHeight: "1.3" }],
      },
      letterSpacing: {
        widest2: "0.18em",
        widest3: "0.16em",
        widest4: "0.12em",
        widest5: "0.10em",
      },
      maxWidth: {
        content: "1080px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      borderRadius: {
        lg2: "10px",
      },
    },
  },
  plugins: [],
};

export default config;
