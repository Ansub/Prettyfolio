import { Box, Container, Stack, chakra, Link, Flex } from "@chakra-ui/react"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import { BsFillHeartFill } from "react-icons/bs"

const Footer = () => {
  return (
    <Box
      bg="transparent"
      marginBottom="1rem"
      marginTop={{ base: "4rem", md: "6rem" }}
    >
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
          <Flex alignItems="center">
            {" "}
            Made with{" "}
            <chakra.span paddingX="1" color="#98002e">
              <BsFillHeartFill />
            </chakra.span>
            by
            <Link
              isExternal
              transition="all 0.3s ease"
              _hover={{ color: "theme.orange", textDecoration: "none" }}
              href="https://ansubkhan.com"
              fontWeight="700"
              paddingX="1"
            >
              Ansub Khan
            </Link>
          </Flex>
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
