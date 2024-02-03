"use client";
import { Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#23A6F0",
    },
    secondary: {
      main: "#23856D",
    },
    success: {
      main: "#2DC071",
    },
    text: {
      primary: "#252B42",
      secondary: "#737373",
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h2: {
      fontSize: "24px",
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: '40px',
      },
    },
    h3: {
      fontSize: "24px",
      fontWeight: 700,
    },
    h4: {
        fontSize: "20px",
        fontWeight: 700,
      },
    h6: {
      fontSize: "14px",
      fontWeight: 700,
    },
    h5: {
        fontSize: "16px",
        fontWeight: 700,
      },
    body1: {
      fontSize: "14px",
    },
    body2:{
        fontSize: "12px",
    }
  },
});


// theme.typography.h2 = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.4rem',
//   },
// };

export default theme;
