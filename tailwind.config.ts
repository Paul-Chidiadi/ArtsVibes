import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#FFB054",
        faintBlack: "rgba(0, 0, 0, 0.5)",
        secondary: "rgba(249, 150, 178, 0.11)",
      },
      fontFamily: {
        lato: ['"Lato"', "sans-serif"],
      },
    },
  },
};
export default config;
