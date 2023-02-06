import React, { useEffect } from "react"
import { GraphQLClient, gql } from "graphql-request"
import Layout from "../components/layout"
import SinglePostComponent from "../components/singlePageComponent"
import SEO from "../components/seo"
import { SinglePostProps } from "../types"

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

export const getServerSideProps = async ({ params }: any) => {
  const slug = params.slug
  const data = await graphcms.request(QUERY, { slug })

  const post = data.post
  return {
    props: {
      post,
    },
  }
}

const SinglePost = ({ post }: { post: SinglePostProps }) => {
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
