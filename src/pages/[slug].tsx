import React, { useEffect } from "react"
import { GraphQLClient, gql } from "graphql-request"
import Layout from "../components/layout"
import SinglePostComponent from "../components/singlePageComponent"
import SEO from "../components/seo"
import { SinglePostProps } from "../types"
import useMixpanelTracking from "../hooks/mixpanel"

const graphcms: any = new GraphQLClient(process.env.CONTENT_API as string)

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      content {
        html
      }
      featuredImage {
        url
      }
      url
      techstack
    }
  }
`
const SLUGLIST = gql`
  {
    posts(first: 500) {
      slug
    }
  }
`

export const getStaticPaths = async () => {
  const { posts } = await graphcms.request(SLUGLIST)
  return {
    paths: posts.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: "blocking",
  }
}

export const getStaticProps = async ({ params }: any) => {
  const slug = params.slug
  const data = await graphcms.request(QUERY, { slug })

  const post = data.post
  return {
    props: {
      post,
    },
    revalidate: 10,
  }
}

const SinglePost = ({ post }: { post: SinglePostProps }) => {
  useMixpanelTracking({ trackName: `${post.title} - Portfolio Opened` })

  useEffect(() => {
    document.title = `${post.title} - Prettyfolio`
  }, [post])

  return (
    <Layout>
      <SEO
        title={`${post.title} - Prettyfolio`}
        description="Discover the best portfolios, curated just for you."
        link={`https://prettyfolio.com/${post.slug}`}
        image={post.featuredImage.url}
      />
      <SinglePostComponent post={post} />
    </Layout>
  )
}

export default SinglePost
