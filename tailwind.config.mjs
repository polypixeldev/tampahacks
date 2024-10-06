/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", "monospace"],
        sans: ["Space Grotesk", "sans-serif"],
        jersey: ['"Jersey 15"', "monospace"],
      },
      colors: {
        "tampahacks-gray": "#1D1D1D",
        "tampahacks-blue": "#0582D9",
        "counterspell-pink": "#FF4186",
      },
    },
  },
  safelist: ["text-counterspell-pink", "text-tampahacks-blue"],
  plugins: [],
};
