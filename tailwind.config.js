/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: { min: "769px", max: "1200px" },
      mobile: { max: "768px" },
      deskTop: { min: "769px" },
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

        gnDarkOrange: "#FF7C1D",
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
        reservationBoxWidth: "49.5rem",
        reservationButtonWidth: "540px",
        myInfoBoxWidth: "49.5rem",
        loginLogo: "16.875rem",
        mLoginForm: "21.875rem",
        reservationTablet: "26.813rem", //429px
        reservationImage: "12.75rem", //204px
        reservationImageTablet: "9.813rem", //157px
        width245px: "15.313rem", //245px
        width330px: "20.625rem", //330px
        activityButton: "7.5rem", // 120px
        myActivitiesStar: "1.188rem", // 19px
        width344px: "21.5rem", //344px
        width142px: "8.875rem", //142px
        width190px: "11.875rem", //190px
        width194px: "12.125rem", //194px
      },
      height: {
        sidebar: "432px",
        reservationBoxHeight: "12.75rem", //204px
        reservationImage: "12.75rem",
        reservationImageTablet: "9.813rem", //157px
        TabletCardList: "9.75rem", //156px
        myActivitiesStar: "1.188rem", // 19pxv
        height142: "8.875rem", //142px
      },
      boxShadow: {
        reservationBox: "0px 4px 16px 0px rgba(17, 34, 17, 0.05)",
      },
      borderRadius: {
        reservationRadius: "2.4rem 0 0 2.4rem",
      },
      margin: {
        myPageTopMargin: "4.5rem",
        margin5px: "0.313rem", // 5px
        myReservationList: "1.313rem", // 21px
        margin9px: "0.563rem", //9px
      },
      gap: {
        activitiesContentGap: "4.5rem",
        gap30px: "1.875rem", //30px
      },
      translate: {
        translate394px: "24.625rem", //394px
      },
      gridTemplateColumns: {
        'custom-4': 'repeat(4, minmax(auto, 28.2rem))',
        'custom-3': 'repeat(3, minmax(23rem, 38rem))',
        'custom-2': 'repeat(2, minmax(16rem, 38rem))'
      }
    },
  },
  plugins: [],
};
