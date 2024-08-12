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
        'About_Desktop': "url('/assets/About_Desktop.png')", 
        'About_Vector':"url('/assets/About_Vector.png')",
        "Btn":"url('/assets/rectangle.png')",
      },
    },
  },
  plugins: [],
};
export default config;
