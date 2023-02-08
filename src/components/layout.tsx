import { Flex, Box } from "@chakra-ui/react"
import Navbar from "./reusable/navbar"
import "cal-sans"
import Footer from "./reusable/footer"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Flex direction="column" flex="1" minHeight="0" w="full">
        {children}
      </Flex>
      <Footer />
    </Box>
  )
}

export default Layout
