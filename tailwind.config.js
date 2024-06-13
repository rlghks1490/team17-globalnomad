/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: { max: "1200px" },
      mobile: { max: "768px" },
    },
    extend: {
      colors: {
        gnDarkBlack: "#1B1B1B",
        gnLightBlack: "#112211",

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
        gnSoftGreen: "#CED8D5",
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
        reservationBoxWidth: "768px",
        reservationButtonWidth: "540px",
        myInfoBoxWidth: "49.5rem",
      },
      height: {
        sidebar: "432px",
        reservationBoxHeight: "204px",
      },
      boxShadow: {
        reservationBox: "0px 4px 16px 0px rgba(17, 34, 17, 0.05)",
      },
      borderRadius: {
        reservationRadius: "2.4rem 0 0 2.4rem",
      },
      margin: {
        myPageTopMargin: "4.5rem",
      },
    },
  },
  plugins: [],
};
