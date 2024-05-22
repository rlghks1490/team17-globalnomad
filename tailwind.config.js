/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gnDarkBlack: "#1B1B1B",
        gnLightBlack: "#333236",

        gnGray100: "#FAFAFA",
        gnGray200: "#EEEEEE",
        gnGray300: "#DDDDDD",
        gnGray400: "#CBC9CF",
        gnGray500: "#ADAEB8",
        gnGray600: "#A4A1AA",
        gnGray700: "#79747E",
        gnGray800: "#4B4B4B",

        gnDarkGreen: "#0B3B2D",
        gnGreen: "#00AC07",
        gnLightGreen: "#F1EFFD",

        gnDarkRed: "#FF472E",
        gnLightRed: "#FFE4E0",

        gnDarkOrang: "#FF7C1D",
        gnLightOrange: "#FFF4E8",

        gnYellow: "#FFC23D",

        gnDarkBlue: "#0085FF",
        gnBlue: "#2EB4FF",
        gnLightBlue: "#E5F3FF",
      },
      fontFamily: {
        sans: ["Pretendard", "ui-sans-serif", "system-ui"],
      },
      width: {
        loginForm: "40rem",
      },
    },
  },
  plugins: [],
};
