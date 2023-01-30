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
import { GraphQLClient, gql } from "graphql-request"
import React, { useState, useEffect } from "react"
import { Posts } from "../types"
import Layout from "../components/layout"
import Head from "next/head"
import Image from "../components/reusable/image"
import NextLink from "next/link"
import { TbExternalLink } from "react-icons/tb"
import { motion } from "framer-motion"

// calling the API
const graphcms: any = new GraphQLClient(process.env.CONTENT_API as string)

// query
const QUERY = gql`
  {
    posts {
      datePublished
      id
      slug
      title
      updatedAt
      featuredImage {
        url
      }
      url
      category
    }
  }
`

export const getStaticProps = async () => {
  const { posts } = await graphcms.request(QUERY)
  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}

const Home = ({ posts }: { posts: Posts[] }) => {
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
  }, [search])

  return (
    <Layout>
      <Head>
        <title>Prettyfolio</title>
      </Head>
      <div>
        <Flex
          alignItems="center"
          justifyContent="center"
          textStyle="cal.lg"
          px="2rem"
          direction="column"
        >
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

          <Flex direction={{ base: "column", md: "row" }} marginBottom="2rem">
            <Flex
              overflowX="scroll"
              width="80vw"
              alignItems="start"
              justifyContent="start"
            >
              <Button
                overflowX="hidden"
                background="white"
                marginRight="1rem"
                _hover={{ background: "white" }}
                color={selectedButton === "all" ? "#b10818" : "black"}
                onClick={() => {
                  setSelectedButton("all")
                  handleCategory("all")
                }}
              >
                All
              </Button>
              <Button
                background="white"
                marginRight="1.8rem"
                _hover={{ background: "white" }}
                color={selectedButton === "code" ? "#b10818" : "black"}
                onClick={() => {
                  setSelectedButton("code")
                  handleCategory("code")
                }}
              >
                Code
              </Button>
              <Button
                background="white"
                marginRight="1.5rem"
                _hover={{ background: "white" }}
                color={selectedButton === "nocode" ? "#b10818" : "black"}
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
                color={selectedButton === "dark" ? "#b10818" : "black"}
                onClick={() => {
                  setSelectedButton("dark")
                  handleCategory("dark")
                }}
              >
                Dark
              </Button>
              <Button
                background="white"
                marginRight="1.5rem"
                _hover={{ background: "white" }}
                color={selectedButton === "light" ? "#b10818" : "black"}
                onClick={() => {
                  setSelectedButton("light")
                  handleCategory("light")
                }}
              >
                Light
              </Button>

              <Button
                background="white"
                marginRight="2rem"
                _hover={{ background: "white" }}
                color={selectedButton === "minimalist" ? "#b10818" : "black"}
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
                color={selectedButton === "fancy" ? "#b10818" : "black"}
                onClick={() => {
                  setSelectedButton("fancy")
                  handleCategory("fancy")
                }}
              >
                Fancy
              </Button>
            </Flex>
            <Flex alignItems="center" justifyContent="center" marginTop="1rem">
              <Input
                type="name"
                placeholder="Search by name..."
                textStyle="raleway.xs"
                fontSize="14px"
                fontWeight="500"
                focusBorderColor="#b10818"
                maxW={{ base: "100%", md: "250px" }}
                value={search}
                onChange={handleSearch}
              />
            </Flex>
          </Flex>
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
                      x: -10,
                      y: -10,
                      transition: {
                        duration: 0.3,
                        type: "spring",
                        stiffness: 100,
                      },
                      // add a shadow
                      boxShadow: "10px 10px 90px -54px rgb(36, 36, 36)",
                    }}
                  >
                    <Image
                      src={post.featuredImage.url}
                      width={500}
                      height={500}
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
        </Flex>
      </div>
    </Layout>
  )
}

export default Home
