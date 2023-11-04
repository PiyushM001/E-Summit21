import type { Config } from 'tailwindcss'

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
      },
      screens: {
        xs: { max: "350px" },
        sm: { max: "600px", min: "350px" },
        mid: { max: "1000px", min: "600px" },
        l: { min: "1000px" },
      },
      fontFamily: {
        proxima: ["Proxima Nova", "sans"],
      },
     
  },
},

  plugins: [],
};
export default config
