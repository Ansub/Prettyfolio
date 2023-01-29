import { Box, Button, Flex, Link } from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import NextLink from "next/link"
const Logo = () => {
  return (
    <NextLink href="/">
      <Image
        src="/images/prettyfolioLogo.png"
        width={30}
        height={30}
        alt="prettyfolio logo"
      />
    </NextLink>
  )
}

const Navbar = () => {
  return (
    <Box padding="1rem" paddingX="2rem">
      <Flex alignItems="center" justifyContent="space-between">
        <Logo />
        <Link href="https://twitter.com/prettyfolioo" isExternal={true}>
          <Button
            background="#b10818"
            _hover={{
              background: "#b10818",
            }}
            color="white"
            textStyle="cal.sm"
          >
            Submit Portfolio
          </Button>
        </Link>
      </Flex>
    </Box>
  )
}

export default Navbar
