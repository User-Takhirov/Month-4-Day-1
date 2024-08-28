/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "24px",
        screens: {
          lg: "1390px",
        },
      },
      backgroundImage: {
        "hero-bg": "url(./img/bg.jpg)",
      },
  
    },
  },
  plugins: [],
};
