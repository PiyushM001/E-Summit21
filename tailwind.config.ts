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
        sm: { max: "750px", min: "350px" },
        mid: { max: "1200px", min: "750px" },
        l:{ max: "1400px", min: "1200px"},
        el: { min: "1400px" },
      },
      fontFamily: {
        proxima: ["Proxima Nova", "sans"],
      },
     
  },
},

  plugins: [],
};
export default config
