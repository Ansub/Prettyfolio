import { extendTheme } from "@chakra-ui/react"

const customTheme = {
  // Font Styles
  textStyles: {
    raleway: {
      xs: {
        fontFamily: "Raleway, sans-serif",
        fontSize: "14px",
      },
      sm: {
        fontFamily: "Raleway, sans-serif",
        fontSize: "12px",
      },
      md: {
        fontFamily: "Raleway, sans-serif",
        fontSize: "17px",
      },
      lg: {
        fontFamily: "Raleway, sans-serif",
        fontSize: "80px",
      },
      xl: {
        fontFamily: "Raleway, sans-serif",
        fontSize: "100px",
      },
    },
    cal: {
      xs: {
        fontFamily: "Cal Sans, sans-serif",
        fontSize: "14px",
      },
      sm: {
        fontFamily: "Cal Sans, sans-serif",
        fontSize: "18px",
      },
      md: {
        fontFamily: "Cal Sans, sans-serif",
        fontSize: "40px",
      },
      lg: {
        fontFamily: "Cal Sans, sans-serif",
        fontSize: "50px",
      },
      xl: {
        fontFamily: "Cal Sans, sans-serif",
        fontSize: "70px",
      },
    },
  },

  //   Color Styles
  colors: {
    theme: {
      bg: "#1a1a1d",
      red: "#C3073F",
      white: "#eaeaea",
    },
  },
}

export default extendTheme(customTheme)
