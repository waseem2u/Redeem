/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {},
      backgroundImage: {
        "button-gradiant":
          "linear-gradient(90deg, rgba(227, 136, 211, 0.25) 0%, rgba(144, 130, 213, 0.25) 52%, rgba(255, 255, 255, 0.25) 100%)",

        "header-bg": "url('/images/bg-header.svg')",
        "bg-simple": "url('/images/card-simple.svg')",
        "card-bg": "url('/images/bg-card.svg')",
      },
      boxShadow: {},
      colors: {
        "black-indian": " #121414",
        "lite-smoke": "#E0E0E01A",
        "smoke-black": "#122121",
        "nova-night": "#8B8B8B",
        "nova-black": "#B4B4B4",
        "baby-blue": "#55EAF1",
        "background-wed": "#0c0c0c",
        "background-image": "#00ffea",
        "Philippine-Silver": "#B4B4B4",
        "orange-dark": "#4F4631",
        "dark-blue": " #5C3075",
        purpal: "rgb(225 202 255)",
        "border-color-blue": "#562C7D",
        "lite-grey": "#BF6DEE1A",
        // background: #BF6DEE1A;

      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
