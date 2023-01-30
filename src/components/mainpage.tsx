import React, { useState, useEffect } from "react"
import {
  Flex,
  Box,
  GridItem,
  Grid,
  Link,
  Button,
  chakra,
  Input,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { TbExternalLink } from "react-icons/tb"
import { motion } from "framer-motion"
import Image from "./reusable/image"
import { Posts } from "../types"

const HeadingSection = () => {
  return (
    <Box textAlign="center">
      <Box textStyle={{ sm: "cal.lg", md: "cal.xl" }}>
        Pretty<chakra.span color="theme.orange">folio</chakra.span>
      </Box>
      <Box
        textStyle={{ base: "raleway.xs", md: "raleway.md" }}
        fontWeight={500}
        paddingBottom="1rem"
        textAlign="center"
      >
        Discover the best portfolios, curated just for you.
      </Box>
    </Box>
  )
}

const CategoriesSection = ({
  handleCategory,
  selectedButton,
  handleSearch,
  search,
  setSelectedButton,
}: any) => {
  return (
    <Flex
      marginBottom="2rem"
      justifyContent="space-between"
      direction={{ base: "column", md: "row" }}
      width={{ base: "85vw", md: "100%" }}
    >
      <Flex overflowX="scroll" alignItems="start" justifyContent="center">
        <Button
          overflowX="hidden"
          background="white"
          marginRight="1rem"
          _hover={{ background: "white" }}
          color={selectedButton === "all" ? "theme.orange" : "black"}
          onClick={() => {
            setSelectedButton("all")
            handleCategory("all")
          }}
        >
          All
        </Button>
        <Button
          background="white"
          marginRight={{ base: "1.8rem", md: "1rem" }}
          _hover={{ background: "white" }}
          color={selectedButton === "code" ? "theme.orange" : "black"}
          onClick={() => {
            setSelectedButton("code")
            handleCategory("code")
          }}
        >
          Code
        </Button>
        <Button
          background="white"
          marginRight={{ base: "1.5rem", md: "1rem" }}
          _hover={{ background: "white" }}
          color={selectedButton === "nocode" ? "theme.orange" : "black"}
          onClick={() => {
            setSelectedButton("nocode")
            handleCategory("nocode")
          }}
        >
          No Code
        </Button>

        <Button
          background="white"
          marginRight="1rem"
          _hover={{ background: "white" }}
          color={selectedButton === "dark" ? "theme.orange" : "black"}
          onClick={() => {
            setSelectedButton("dark")
            handleCategory("dark")
          }}
        >
          Dark
        </Button>
        <Button
          background="white"
          marginRight={{ base: "1.5rem", md: "1rem" }}
          _hover={{ background: "white" }}
          color={selectedButton === "light" ? "theme.orange" : "black"}
          onClick={() => {
            setSelectedButton("light")
            handleCategory("light")
          }}
        >
          Light
        </Button>

        <Button
          background="white"
          marginRight={{ base: "2rem", md: "1rem" }}
          _hover={{ background: "white" }}
          color={selectedButton === "minimalist" ? "theme.orange" : "black"}
          onClick={() => {
            setSelectedButton("minimalist")
            handleCategory("minimalist")
          }}
        >
          Minimalist
        </Button>

        <Button
          background="white"
          marginRight="1.5rem"
          _hover={{ background: "white" }}
          color={selectedButton === "fancy" ? "theme.orange" : "black"}
          onClick={() => {
            setSelectedButton("fancy")
            handleCategory("fancy")
          }}
        >
          Fancy
        </Button>
      </Flex>
      <Flex marginTop={{ base: "1rem", md: "0rem" }}>
        <Input
          type="name"
          placeholder="search by name"
          textStyle="raleway.xs"
          fontSize="14px"
          fontWeight="500"
          focusBorderColor="theme.orange"
          maxW={{ base: "100%", md: "300px" }}
          value={search}
          onChange={handleSearch}
          variant="flushed"
          borderBottom="1px solid"
          borderColor="theme.orange"
        />
      </Flex>
    </Flex>
  )
}

const PostGrid = ({ filteredData }: any) => {
  return (
    <Grid
      gridTemplateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={6}
    >
      {filteredData.map((post: any) => (
        <GridItem key={post.id}>
          <NextLink href={`/${post.slug}`}>
            <Box
              as={motion.div}
              whileHover={{
                scale: 1.02,
                transition: {
                  duration: 0.3,
                  type: "Spring",
                  stiffness: 100,
                },

                // add a shadow
                boxShadow: "10px 10px 90px -54px rgb(36, 36, 36)",
              }}
              whileTap={{
                scale: 0.9,
                transition: {
                  duration: 0.3,
                  type: "Spring",
                  stiffness: 100,
                },
              }}
              border="1px solid #e2e8f0"
            >
              <Image
                src={post.featuredImage.url}
                width={700}
                height={700}
                alt={post.title}
                props={{
                  hover: "cursor-pointer",
                  boxShadow: "10px 10px 90px -54px rgba(0, 0, 0, 0.58)",
                }}
              />
            </Box>
          </NextLink>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            marginTop="0.2rem"
          >
            <NextLink href={`/${post.slug}`}>
              <Box textStyle={{ base: "cal.xs", md: "cal.sm" }}>
                {post.title}
              </Box>
            </NextLink>
            <Link href={post.url} isExternal={true} textStyle="cal.sm">
              <Box fontSize="1rem">
                <TbExternalLink />
              </Box>
            </Link>
          </Flex>
        </GridItem>
      ))}
    </Grid>
  )
}

const MainPage = ({ posts }: { posts: Posts[] }) => {
  const [search, setSearch] = useState("")
  const [selectedButton, setSelectedButton] = useState("all")
  // sorting based on the latest post
  const data = posts.sort((a, b) => {
    return (
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
    )
  })
  const [filteredData, setFilteredData] = useState(data)

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
    // filter the data array based on the input value
    const filteredSearchData = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredData(filteredSearchData)
  }

  const handleCategory = (category: string) => {
    if (category === "all") {
      setFilteredData(data)
    } else {
      const filteredCategoryData = data.filter((post: any) =>
        post.category?.name.includes(category)
      )
      setFilteredData(filteredCategoryData)
    }
  }

  // show all posts when search input is cleared
  useEffect(() => {
    if (search === "") {
      setFilteredData(data)
    }
  }, [search, data])

  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        textStyle="cal.lg"
        px="2rem"
        direction="column"
      >
        <HeadingSection />
        <CategoriesSection
          handleCategory={handleCategory}
          selectedButton={selectedButton}
          handleSearch={handleSearch}
          search={search}
          setSelectedButton={setSelectedButton}
        />
        <PostGrid filteredData={filteredData} />
      </Flex>
    </Box>
  )
}

export default MainPage
