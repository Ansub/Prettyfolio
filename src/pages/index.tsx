import { Flex } from "@chakra-ui/react"
import { GraphQLClient, gql } from "graphql-request"
import React from "react"
import { Posts } from "../types"

// calling the API
const CONTENTAPI: string = process.env.CONTENT_API as string
const graphcms: any = new GraphQLClient(CONTENTAPI)

// query
const QUERY = gql`
  {
    posts {
      createdAt
      datePublished
      id
      publishedAt
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

const Home = ({ posts }: { posts: Posts }) => {
  console.log(posts)
  return (
    <div>
      <Flex
        alignItems="center"
        justifyContent="center"
        color="red.400"
        height="100vh"
        fontSize="10rem"
      >
        Ansub Khan
      </Flex>
    </div>
  )
}

export default Home
