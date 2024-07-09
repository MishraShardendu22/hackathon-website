import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-carousel":"linear-gradient(112deg, #1D2948 0%, #141D33 25%, #0F1628 38%, #050A16 100%)",
      },
      colors: {
        'purple-planet': "#55024C"
      },
      width: {
        '128': '32rem',
      },
      boxShadow:{
        'planet': "rgba(0, 0, 0, 0.80) -10px 22px 70px 4px",
      },
    },
  },
  plugins: [],
};
export default config;
