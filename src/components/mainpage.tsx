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
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import { TbExternalLink } from "react-icons/tb"
import { motion } from "framer-motion"
import Image from "./reusable/image"
import { Posts } from "../types"
import useMixpanelButton from "../hooks/mixpanelButton"

const HeadingSection = () => {
  return (
    <Box textAlign="center">
      <Box textStyle={{ base: "cal.lg", md: "cal.xl" }}>
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
const FilterButton = ({
  selectedButton,
  setSelectedButton,
  handleCategory,
  title,
}: any) => {
  const handleClick = useMixpanelButton(`${title} Button Clicked - Homepage`)
  return (
    <Box>
      <Button
        background="white"
        marginX={{ base: "0.3rem", md: "0rem" }}
        padding={{ base: "1rem 1.5rem", md: "1rem 1rem" }}
        textStyle="cal.xs"
        fontSize={{ base: "0.8rem", md: "1rem" }}
        _hover={{ background: "white", color: "theme.orange" }}
        color={
          selectedButton === title.replace(/ /g, "").toLowerCase()
            ? "theme.orange"
            : "black"
        }
        onClick={() => {
          setSelectedButton(title.replace(/ /g, "").toLowerCase())
          handleCategory(title.replace(/ /g, "").toLowerCase())
          handleClick()
        }}
      >
        {title}
      </Button>
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
      width={{ base: "90vw", md: "100%" }}
    >
      <Flex
        overflowX="auto"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
        whiteSpace="nowrap"
        scrollBehavior="smooth"
        alignItems="center"
        justifyContent="center"
      >
        <FilterButton
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          handleCategory={handleCategory}
          title="All"
        />
        <FilterButton
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          handleCategory={handleCategory}
          title="Code"
        />
        <FilterButton
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          handleCategory={handleCategory}
          title="No Code"
        />
        <FilterButton
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          handleCategory={handleCategory}
          title="Dark"
        />
        <FilterButton
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          handleCategory={handleCategory}
          title="Light"
        />
        <FilterButton
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          handleCategory={handleCategory}
          title="Minimalist"
        />
        <FilterButton
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
          handleCategory={handleCategory}
          title="Fancy"
        />
      </Flex>
      <Flex marginTop={{ base: "1rem", md: "0rem" }}>
        <InputGroup color="gray.500">
          <InputLeftElement pointerEvents="none">
            <SearchIcon />
          </InputLeftElement>
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
            borderBottom="0px"
          />
        </InputGroup>
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
                width={1920}
                height={1080}
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
            <Link
              href={`${post.url}/?ref=prettyfolio`}
              isExternal={true}
              textStyle="cal.sm"
            >
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
