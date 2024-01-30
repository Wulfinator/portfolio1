/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        bodyColor: "#030712",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#84cc16",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #030712, -10px -10px 19px #006400",
        shadowTwo: "5px 5px 9.5px #030712, -5px -5px 9.5px #006400",
      },
    },
  },
  plugins: [],
};
