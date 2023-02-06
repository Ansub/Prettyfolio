import { Box, Button, Flex, Link, useColorModeValue } from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import NextLink from "next/link"
import { motion } from "framer-motion"
import useMixpanelButton from "../../hooks/mixpanelButton"
import { useColorMode } from "@chakra-ui/react"
import { MdLightMode, MdDarkMode } from "react-icons/md"
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
  const { colorMode, toggleColorMode } = useColorMode()

  const handleClick = useMixpanelButton("Submit Portfolio Button Clicked")
  return (
    <Box padding="1rem" paddingX={{ md: "2rem" }}>
      <Flex alignItems="center" justifyContent="space-between">
        <Logo />

        <Box>
          <Button
            background="transparent"
            as={motion.div}
            fontSize="1.2rem"
            // rotate icon 360 degs
            whileHover={{
              rotate: "360deg",
              scale: 1.2,
              transition: {
                duration: 0.3,
                type: "spring",
              },
            }}
            color={useColorModeValue("theme.black", "theme.white")}
            mr="0.2rem"
            _hover={{
              background: "transparent",
              transform: "scale(1.05)",
              color: useColorModeValue("gray.600", "yellow.500"),
            }}
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
          </Button>
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
              onClick={handleClick}
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
        </Box>
      </Flex>
    </Box>
  )
}

export default Navbar
