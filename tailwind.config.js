/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#0F081E",
        buttonPrimary: "rgba(86, 39, 255, 1)",
        buttonSecondery: "rgba(59, 36, 143, 0.67)",
      },
    },
    plugins: [],
  },
};
