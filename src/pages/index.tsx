import { GraphQLClient, gql } from "graphql-request"
import React from "react"
import { Posts } from "../types"
import Layout from "../components/layout"
import Head from "next/head"
import MainPage from "../components/mainpage"
import SEO from "../components/seo"
import useMixpanelTracking from "../hooks/mixpanel"

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
    revalidate: 1,
  }
}

const Home = ({ posts }: { posts: Posts[] }) => {
  useMixpanelTracking({ trackName: "Home Page" })
  return (
    <Layout>
      <SEO
        title="Prettyfolio"
        description="Discover the best portfolios, curated just for you."
        image="https://res.cloudinary.com/djs9vdcla/image/upload/v1675502613/projects/prettyfolioSEO_lrqcnt.png"
        link="https://prettyfolio.com"
      />
      <Head>
        <title>Prettyfolio</title>
      </Head>
      <MainPage posts={posts} />
    </Layout>
  )
}

export default Home
