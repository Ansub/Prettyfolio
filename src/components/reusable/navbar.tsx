import { Box, Button, Flex, Link } from "@chakra-ui/react"
import React from "react"
import Image from "next/image"

const Logo = () => {
  return (
    <Image
      src="/images/prettyfolioLogo.png"
      width={30}
      height={30}
      alt="prettyfolio logo"
    />
  )
}

const Navbar = () => {
  return (
    <Box padding="1rem">
      <Flex alignItems="center" justifyContent="space-between">
        <Logo />
        <Link href="https://twitter.com/prettyfolioo" isExternal={true}>
          <Button textStyle="cal.sm">Submit Your Portfolio</Button>
        </Link>
      </Flex>
    </Box>
  )
}

export default Navbar
