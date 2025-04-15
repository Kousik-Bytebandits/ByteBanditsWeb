/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        scroll: "scrollText 30s linear infinite",
        float: "floaty 6s ease-in-out infinite",
      },
      keyframes: {
        scrollText: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      transformOrigin: {
        'bottom': 'bottom',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        '-90': '-90deg',
      },
    },
  },
  plugins: [],
}
