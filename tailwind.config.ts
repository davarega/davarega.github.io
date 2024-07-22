import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['var(--font-poppins)'],
      quintessential: ['var(--font-quintessential)'],
    },
    extend: {
      colors: {
        purple: {
          mate: "#8929AD",
          base: "#8233C5",
        },
        blue: {
          mate: "#436AAC",
          dash: "#43B7B8",
          base: "#274B74",
        },
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
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
