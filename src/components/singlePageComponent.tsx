import { Box, Flex, Link, Tooltip } from "@chakra-ui/react"
import { TbExternalLink } from "react-icons/tb"
import { MdDateRange } from "react-icons/md"
import { IoIosArrowRoundBack } from "react-icons/io"
import Moment from "react-moment"
import NextLink from "next/link"
import { iconMap } from "../data/icons"
import { motion } from "framer-motion"

function Icon({ icon }: { icon: keyof typeof iconMap }) {
  const { logo, color, tooltip } = iconMap[icon] || {}
  return (
    <Tooltip
      label={tooltip}
      aria-label={tooltip}
      background="transparent"
      boxShadow="none"
      color="#212121"
    >
      <Box
        // add animation to icon
        as={motion.div}
        whileHover={{ scale: 1.2 }}
        fontSize="1.4rem"
        marginRight="0.5rem"
        textColor={color}
      >
        {logo}
      </Box>
    </Tooltip>
  )
}

const SinglePostComponent = ({ post }: { post: any }) => {
  return (
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
        <Box
          transition="all 0.3s ease-in-out"
          _hover={{
            color: "theme.orange",
            cursor: "pointer",
          }}
          textStyle={{ base: "cal.lg", lg: "cal.xl" }}
        >
          {post.title}
        </Box>
        <Flex
          alignItems="center"
          justifyContent="center"
          textStyle="raleway.md"
          fontWeight="500"
          fontSize="0.9rem"
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
              <Box
                as={motion.div}
                // rotate icon 360 degs
                whileHover={{
                  rotate: "360deg",
                  scale: 1.2,
                  transition: {
                    duration: 0.3,
                    type: "spring",
                  },
                }}
                fontSize="2rem"
                transition="all 0.3s ease-in-out"
                rotate="180deg"
                _hover={{
                  color: "theme.orange",
                }}
              >
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
            <Link isExternal href={`${post.url}/?ref=prettyfolio`}>
              <Box
                as={motion.div}
                // rotate icon 360 degs
                whileHover={{
                  rotate: "360deg",
                  scale: 1.2,
                  transition: {
                    duration: 0.3,
                    type: "spring",
                  },
                }}
                _hover={{
                  color: "theme.orange",
                }}
                fontSize="1.4rem"
                transition="all 0.3s ease-in-out"
              >
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
  )
}

export default SinglePostComponent
