import { extendTheme, type ThemeConfig } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#ffffff", "#070707")(props),
      color: mode("#070707", "#ffffff")(props),
    },
  }),
}

const customTheme = {
  styles,
  config,
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
      white: "#ffffff",
      orange: "#f43e36",
      black: "#070707",
    },
  },
}

export default extendTheme(customTheme)
