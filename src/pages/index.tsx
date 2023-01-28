import { Flex, Box, GridItem, Grid, Link } from "@chakra-ui/react"
import { GraphQLClient, gql } from "graphql-request"
import React, { useEffect } from "react"
import { Posts } from "../types"
import Layout from "../components/layout"
import Head from "next/head"
import Image from "../components/reusable/image"
import NextLink from "next/link"
import { TbExternalLink } from "react-icons/tb"

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
      content {
        html
      }
      featuredImage {
        url
      }
      tag
      url
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
  // sorting based on the latest post
  const data = posts.sort((a, b) => {
    return (
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
    )
  })
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
          <Box textStyle={{ base: "cal.lg", md: "cal.xl" }}>Prettyfolio</Box>
          <Box
            textStyle={{ base: "raleway.xs", md: "raleway.md" }}
            fontWeight={400}
            paddingBottom="1rem"
            textAlign="center"
          >
            Discover the best portfolios, curated just for you.
          </Box>
          <Grid
            gridTemplateColumns={{
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {data.map((post: any) => (
              <GridItem key={post.id}>
                <NextLink href={`/${post.slug}`}>
                  <Image
                    src={post.featuredImage.url}
                    width={500}
                    height={500}
                    alt={post.title}
                  />
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
