import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./app/**/*.{ts,tsx}", 
    "./sanity/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography, nextui()],
  darkMode: "class",
} satisfies Config;
