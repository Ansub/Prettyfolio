import { ChakraProvider, Flex } from "@chakra-ui/react"
import Navbar from "./reusable/navbar"
import Theme from "../theme"
import "cal-sans"
import Footer from "./reusable/footer"

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={Theme}>
      <Navbar />
      <Flex direction="column" flex="1" minHeight="0" w="full">
        {children}
      </Flex>
      <Footer />
    </ChakraProvider>
  )
}

export default Layout
