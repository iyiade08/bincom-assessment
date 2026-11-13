/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        backgroundGreen: "hsl(142, 22%, 7%)",
        sectionGreen: "hsl(147, 18%, 10%)",
        buttonGreen: "hsl(147, 34%, 51%)",
        textColor: "#afada3",
      },
    },
  },
  plugins: [],
};
