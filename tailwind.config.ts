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
      hsp: "1066px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#FFB054",
        faintBlack: "rgba(0, 0, 0, 0.5)",
        secondary: "rgba(249, 150, 178, 0.11)",
        footer: "rgba(86, 71, 135, 1)",
        smallColor: "#6C6A6A",
        notify: "#FFE0B2",
      },
      fontFamily: {
        lato: ['"Lato"', "sans-serif"],
        gothic: ['"Dela Gothic One"', "sans-serif"],
      },
      boxShadow: {
        "custom-dark": "7px 5px 5px rgba(0, 0, 0, 1)",
      },
    },
  },
};
export default config;
