import React, { useEffect } from "react"
import { GraphQLClient, gql } from "graphql-request"
import { Box, Flex, Link, Tooltip } from "@chakra-ui/react"
import Layout from "../components/layout"
import { FaVuejs } from "react-icons/fa"
import { FiFigma } from "react-icons/fi"
import { TbBrandNextjs, TbExternalLink } from "react-icons/tb"
import { MdDateRange } from "react-icons/md"
import { IoIosArrowRoundBack } from "react-icons/io"

import {
  SiChakraui,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiWebflow,
  SiVite,
  SiFirebase,
  SiWebgl,
  SiWix,
} from "react-icons/si"
import { GrGraphQl } from "react-icons/gr"
import Moment from "react-moment"
import NextLink from "next/link"

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
    posts {
      slug
    }
  }
`

export const getStaticPaths = async () => {
  const { posts } = await graphcms.request(SLUGLIST)
  return {
    paths: posts.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: false,
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
    revalidate: 10000,
  }
}

const iconMap = {
  figma: { logo: <FiFigma />, color: "#eb4667", tooltip: "Figma" },
  chakra: { logo: <SiChakraui />, color: "#5bc4c4", tooltip: "Chakra  UI" },
  tailwind: {
    logo: <SiTailwindcss />,
    color: "#41b8f1",
    tooltip: "Tailwind CSS",
  },
  nextjs: { logo: <TbBrandNextjs />, color: "#000000", tooltip: "NextJS" },
  react: { logo: <SiReact />, color: "#5ed4f4", tooltip: "React" },
  typescript: {
    logo: <SiTypescript />,
    color: "#2f75c0",
    tooltip: "Typescript",
  },
  graphql: { logo: <GrGraphQl />, color: "#db0294", tooltip: "graphql" },
  vuejs: { logo: <FaVuejs />, color: "#3eb27f", tooltip: "vuejs" },
  webflow: { logo: <SiWebflow />, color: "#4d58f2", tooltip: "Webflow" },
  vite: { logo: <SiVite />, color: "#8720b6", tooltip: "Vite" },
  firebase: { logo: <SiFirebase />, color: "#facc2c", tooltip: "Firebase" },
  webgl: { logo: <SiWebgl />, color: "#961a1f", tooltip: "WebGL" },
  wix: { logo: <SiWix />, color: "#010101", tooltip: "Wix" },
}

function Icon({ icon }: { icon: keyof typeof iconMap }) {
  const { logo, color, tooltip } = iconMap[icon] || {}
  return (
    <Tooltip label={tooltip} aria-label={tooltip}>
      <Box fontSize="1.4rem" marginRight="0.5rem" textColor={color}>
        {logo}
      </Box>
    </Tooltip>
  )
}

const SinglePost = ({ post }: { post: any }) => {
  useEffect(() => {
    document.title = `${post.title} - Prettyfolio`
  }, [post])

  return (
    <Layout>
      <Flex
        direction="column"
        width="100%"
        marginTop="2rem"
        paddingX="1rem"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Box width={{ sm: "90%", md: "80%", lg: "70%", xl: "60%" }}>
          <Box textStyle="cal.lg">{post.title}</Box>
          <Flex
            alignItems="center"
            justifyContent="center"
            textStyle="raleway.md"
          >
            <Box marginRight="0.2rem">
              <MdDateRange />
            </Box>{" "}
            <Box marginRight="0.2rem">Added:</Box>
            <Moment format="DD MMMM YYYY">{post.datePublished}</Moment>
          </Flex>
          {/**Icons */}
          <Flex
            direction="row"
            alignItems="center"
            marginY="2rem"
            justifyContent="between"
            width="100%"
          >
            <Flex justifyContent="start" alignItems="start" width="33.3%">
              <NextLink href="/">
                <Box fontSize="2rem">
                  <IoIosArrowRoundBack />
                </Box>
              </NextLink>
            </Flex>
            <Flex
              textAlign="center"
              justifyContent="center"
              alignItems="center"
              width="33.3%"
            >
              {post.techstack?.tech.map((icon: any) => (
                <Icon key={icon} icon={icon} />
              ))}
            </Flex>
            <Flex width="33.3%" justifyContent="end" alignItems="end">
              <Link isExternal href={post.url}>
                <Box fontSize="1.4rem">
                  <TbExternalLink />
                </Box>
              </Link>
            </Flex>
          </Flex>
          <Flex
            className="post"
            alignItems="center"
            justifyContent="center"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          ></Flex>
        </Box>
      </Flex>
    </Layout>
  )
}

export default SinglePost
