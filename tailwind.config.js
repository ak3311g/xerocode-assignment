/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Epilogue: ["Epilogue", "sans-serif"],
      },
      backgroundImage: {
        "heropattern": "url('/pexels-canva-studio-3153201 1.png')",
      }
    },
  },
  plugins: [],
}