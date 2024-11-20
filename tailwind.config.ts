
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {},
      backgroundImage: {

        "header-bg": "url('/images/bg-header.svg')",
        "bg-simple": "url('/images/card-simple.svg')",
        "card-bg": "url('/images/bg-card.svg')",
        
      },
      boxShadow: {},
      colors: {
        
        "black-indian" :" #121414",
        "lite-smoke"   :"#E0E0E01A",
        "smoke-black":"#122121",
        "nova-night": "#8B8B8B",
        "nova-black":"#B4B4B4",
        "baby-blue": "#55EAF1",
        "background-wed":"#0c0c0c",
        "background-image":"#00ffea",
        "Philippine-Silver" : "#B4B4B4",
        "orange-dark":"#4F4631",

      },
    },
  },
  plugins: [],
};
