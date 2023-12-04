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
        "hero-mobile": "url('/public/illustration-sign-up-mobile.svg')",
        "hero-desktop": "url('/public/illustration-sign-up-desktop.svg')",
        "icon-list": "url('/public/icon-list.svg')",
        "icon-success": "url('/public/icon-success.svg')",
      },
    },
  },
  plugins: [],
};
