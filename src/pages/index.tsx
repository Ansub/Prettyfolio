import { GraphQLClient, gql } from "graphql-request"
import React, { useState, useEffect } from "react"
import { Posts } from "../types"
import Layout from "../components/layout"
import Head from "next/head"
import Image from "../components/reusable/image"
import MainPage from "../components/mainpage"

// calling the API
const graphcms: any = new GraphQLClient(process.env.CONTENT_API as string)

// query
const QUERY = gql`
  {
    posts(first: 500) {
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
  }
}

const Home = ({ posts }: { posts: Posts[] }) => {
  return (
    <Layout>
      <Head>
        <title>Prettyfolio</title>
      </Head>
      <MainPage posts={posts} />
    </Layout>
  )
}

export default Home
