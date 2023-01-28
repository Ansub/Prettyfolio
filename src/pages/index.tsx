import { Flex } from "@chakra-ui/react"
import { GraphQLClient, gql } from "graphql-request"
import React, { useEffect } from "react"
import { Posts } from "../types"
import Layout from "../components/layout"

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
  return (
    <Layout>
      <div>
        <Flex
          alignItems="center"
          justifyContent="center"
          height="100vh"
          fontSize="10rem"
          textStyle="cal.xl"
        >
          Prettyfolio
        </Flex>
      </div>
    </Layout>
  )
}

export default Home
