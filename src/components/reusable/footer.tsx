import { Box, Container, Stack, Link, Flex } from "@chakra-ui/react"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import { ReactNode } from "react"

const Footer = () => {
  return (
    <Box bg="white" marginTop="2rem">
      <Container
        as={Stack}
        maxW={"100vw"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Box textStyle="raleway.sm" fontWeight="500" fontSize="0.9rem">
          Made with ❤️ by{" "}
          <Link
            isExternal
            transition="all 0.3s ease"
            _hover={{ color: "theme.orange", textDecoration: "none" }}
            href="https://ansubkhan.com"
            fontWeight="700"
          >
            Ansub Khan
          </Link>
        </Box>
        <Flex gap="3" alignItems="center">
          <Box textStyle="cal.xs">Follow My Socials:</Box>
          <Link href={"https://twitter.com/justansub"} isExternal>
            <Box transition="all 0.3s ease" _hover={{ color: "theme.orange" }}>
              <FaTwitter />
            </Box>
          </Link>
          <Link href={"https://github.com/ansub"} isExternal>
            <Box transition="all 0.3s ease" _hover={{ color: "theme.orange" }}>
              <FaGithub />
            </Box>
          </Link>
          <Link href={"https://linkedin.com/in/ansub"} isExternal>
            <Box transition="all 0.3s ease" _hover={{ color: "theme.orange" }}>
              <FaLinkedin />
            </Box>
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
