/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      bgColors: "hsl(235, 18%, 26%)",
    },
    extend: {
      colors: {
        tomato: "#ff6257",
        orange: "#FF693A",
        pink: "#FF537A",
        grey: "#9294a0",
        "darkslate-grey": "#242742",
        "charcoal-grey": "#36384e",
      },
      backgroundImage: {
        "hero-mobile": "url('/assets/images/illustration-sign-up-mobile.svg')",
        "hero-desktop": "url('/assets/images/illustration-sign-up-mobile.svg')",
        "icon-list": "url('/assets/images/icon-list.svg')",
        "icon-success": "url('/assets/images/icon-success.svg')",
      },
    },
  },
  plugins: [],
};
