import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        purple: {
          mate: "#8929AD",
          base: "#8233C5",
          50: "#f3ebff",
          100: "#e6ccff",
          200: "#d999ff",
          300: "#cc66ff",
          400: "#bf33ff",
          500: "#b200ff",
          600: "#9900e6",
          700: "#7f00cc",
          800: "#6600b3",
          900: "#4c0099",
        },
        blue: {
          mate: "#436AAC",
          dash: "#43B7B8",
          base: "#274B74",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
