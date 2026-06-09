import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#101112",
        graphite: "#1D2023",
        steel: "#68707A",
        zincpanel: "#F1F3F4",
        construction: "#F5B700",
        signal: "#FFD23F"
      },
      boxShadow: {
        industrial: "0 18px 60px rgba(0, 0, 0, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
