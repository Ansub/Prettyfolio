import { Box, Button, Flex, Link } from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import NextLink from "next/link"
const Logo = () => {
  return (
    <NextLink href="/">
      <Image
        src="/images/prettyfolio.svg"
        width={30}
        height={30}
        alt="prettyfolio logo"
      />
    </NextLink>
  )
}

const Navbar = () => {
  return (
    <Box padding="1rem" paddingX={{ md: "2rem" }}>
      <Flex alignItems="center" justifyContent="space-between">
        <Logo />
        <Link href="https://twitter.com/prettyfolioo" isExternal={true}>
          <Button
            background="theme.orange"
            _hover={{
              background: "theme.orange",
            }}
            paddingX="0.5rem"
            paddingY="0.2rem"
            color="white"
            textStyle="cal.sm"
            fontSize={{ base: "0.9rem", md: "1.1rem" }}
          >
            Submit Portfolio
          </Button>
        </Link>
      </Flex>
    </Box>
  )
}

export default Navbar
