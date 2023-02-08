import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider, cookieStorageManagerSSR } from "@chakra-ui/react"
import theme from "../theme"

function MyApp({ Component, pageProps, cookies }: AppProps & { cookies: any }) {
  const colorModeManager = cookieStorageManagerSSR(cookies)
  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
MyApp.getInitialProps = (data: any) => {
  const { ctx } = data
  return {
    cookies: ctx?.req?.headers?.cookie || "",
  }
}

export default MyApp
