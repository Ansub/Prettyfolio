import { ChakraProvider, Flex } from "@chakra-ui/react"
import Navbar from "./reusable/navbar"
import Theme from "../theme"
import "cal-sans"

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={Theme}>
      <Flex direction="column" w="100vw" h="100vh" fontFamily="Lora, serif">
        <Navbar />
        <Flex direction="column" flex="1" minHeight="0" w="full">
          {children}
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}

export default Layout
