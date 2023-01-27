import { extendTheme } from "@chakra-ui/react"

const customTheme = {
  // Font Styles
  textStyles: {
    font: {
      xs: {
        fontFamily: "Raleway, sans-serif",
        fontSize: "12px",
      },
      sm: {
        fontFamily: "Raleway, sans-serif",
        fontSize: "12px",
      },
      md: {
        fontFamily: "Raleway, sans-serif",
        fontSize: "40px",
      },
      lg: {
        fontFamily: "Raleway, sans-serif",
        fontSize: "70px",
      },
      xl: {
        fontFamily: "Raleway, sans-serif",
        fontSize: "100px",
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

  // Container
  container: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
}

export default extendTheme(customTheme)
