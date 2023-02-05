import { Flex, Box, Button } from "@chakra-ui/react"
import Layout from "../components/layout"
import { useRouter } from "next/router"
import Image from "next/image"
import useMixpanelTracking from "../hooks/mixpanel"
const NotFound = () => {
  const router = useRouter()
  useMixpanelTracking({ trackName: "404 Page" })
  return (
    <Layout>
      <Flex
        direction="column"
        height="80vh"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="/images/prettyfolio.svg"
          height={200}
          width={200}
          alt="prettyfolio"
        />
        <Box textStyle={{ base: "cal.md", lg: "cal.xl" }} color="theme.black">
          Page Not Found!
        </Box>
        <Button
          marginTop="1rem"
          background="theme.orange"
          color="white"
          onClick={() => router.push("/")}
          textStyle="cal.sm"
          _hover={{
            background: "theme.orange",
            transform: "scale(1.05)",
            color: "white",
          }}
        >
          Go Back Home
        </Button>
      </Flex>
    </Layout>
  )
}

export default NotFound
