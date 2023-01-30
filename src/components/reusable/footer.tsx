import {
  Box,
  chakra,
  Container,
  Stack,
  Link,
  useColorModeValue,
  VisuallyHidden,
  color,
} from "@chakra-ui/react"
import { FaTwitter } from "react-icons/fa"
import { ReactNode } from "react"

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

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
            _hover={{ textDecoration: "none" }}
            href="https://ansubkhan.com"
            fontWeight="700"
          >
            Ansub Khan
          </Link>
        </Box>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Twitter"}
            href={"https://twitter.com/justansub"}
          >
            <FaTwitter />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
