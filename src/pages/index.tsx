import { Flex } from "@chakra-ui/react"
import { GraphQLClient, gql } from "graphql-request"
import React, { useEffect } from "react"
import { Posts } from "../types"

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
