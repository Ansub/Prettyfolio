import { Box, Button, Flex, Link } from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import NextLink from "next/link"
import { motion } from "framer-motion"
const Logo = () => {
  return (
    <Box
      as={motion.div}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.3,
          type: "spring",
        },
      }}
    >
      <NextLink href="/">
        <Image
          src="/images/prettyfolio.svg"
          width={30}
          height={30}
          alt="prettyfolio logo"
        />
      </NextLink>
    </Box>
  )
}

const Navbar = () => {
  return (
    <Box padding="1rem" paddingX={{ md: "2rem" }}>
      <Flex alignItems="center" justifyContent="space-between">
        <Logo />
        <Link
          href="https://twitter.com/prettyfolioo"
          textDecoration="none"
          style={{ textDecoration: "none" }}
          isExternal={true}
        >
          <Button
            background="theme.orange"
            _hover={{
              background: "theme.orange",
              transform: "scale(1.05)",
            }}
            transition="all 0.3s ease-in-out"
            paddingX="0.5rem"
            paddingY="0.2rem"
            color="white"
            textStyle="cal.sm"
            fontSize={{ base: "0.9rem", md: "1.0.8rem" }}
          >
            Submit Portfolio
          </Button>
        </Link>
      </Flex>
    </Box>
  )
}

export default Navbar
