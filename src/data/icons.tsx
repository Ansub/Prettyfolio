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
  SiFramer,
  SiJavascript,
} from "react-icons/si"
import { GrGraphQl } from "react-icons/gr"
import { FaVuejs } from "react-icons/fa"
import { FiFigma } from "react-icons/fi"
import { TbBrandNextjs } from "react-icons/tb"

export const iconMap = {
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
  framer: { logo: <SiFramer />, color: "#034cf6", tooltip: "Framer" },
  javascript: {
    logo: <SiJavascript />,
    color: "#facc2c",
    tooltip: "Javascript",
  },
}
