import { memo, useEffect, useCallback, useState } from "react";
import { getColumnCount, getRowCount } from "@app/utils";
import { motion, useScroll } from "framer-motion";
import {
  SimpleGrid,
  Box,
  Text,
  theme,
  Heading,
  VStack,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Head from "next/head";

const COUNT = 124;
const colors = Object.values(theme.colors);
const manyRandomColors = () => {
  const list = colors.map((color) => Object.values(color)).slice(6);
  const allColors = list.concat([], ...list);

  return allColors[Math.floor(Math.random() * allColors.length)];
};
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.001,
      staggerDirection: -1,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 0.5, ease: [0.17, 0.67, 0.83, 0.67] },
};

const CubeList = memo(
  ({ cubeCount }) => {
    return cubeCount?.map((_, index) => {
      const odd = index % 2 === 0;

      return (
        <Box
          as={motion.li}
          bg={() => manyRandomColors}
          listStyleType="none"
          cursor="pointer"
          key={index}
          variants={listItem}
          zIndex={odd ? 2 : 0}
        />
      );
    });
  },
  () => true
);

CubeList.displayName = "CubeList";

export default function Cubes() {
  const columns = getColumnCount(COUNT);
  const rows = getRowCount(COUNT);
  const [cubeCount, setCubeCount] = useState();
  const [columnCount, setColumnCount] = useState(0);
  const [yPos, setYPos] = useState(0);
  const { scrollY } = useScroll();

  const handleSetup = useCallback(() => {
    setColumnCount(columns);
    setCubeCount([...Array(columns * rows)]);
  }, [columns, rows]);

  useEffect(() => {
    window.addEventListener("resize", handleSetup, false);

    return () => window.removeEventListener("resize", handleSetup);
  }, [columns, rows]);

  useEffect(() => {
    handleSetup();
  }, [columns, rows]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setYPos(parseInt(latest, 10));
    });
  }, []);

  return (
    cubeCount && (
      <>
        <Head>
          <title>Sam Ageloff</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            description="A product and UX-focused software engineer, web developer and
            technical leader, with 20 years experience."
          />
        </Head>
        <VStack
          position="fixed"
          zIndex="3"
          height="100vh"
          p={4}
          gap={2}
          bg="blackAlpha.500"
        >
          <Heading
            as="h1"
            lineHeight={1}
            fontSize="18vw"
            color="whiteAlpha.600"
          >
            Sam Ageloff
            <br /> {yPos}
          </Heading>
          <Text color="whiteAlpha.600" width="100%" fontSize={["auto", "2vw"]}>
            A product and UX-focused software engineer, web developer and
            technical leader, with 20 years experience.
          </Text>
        </VStack>
        <Box
          height={typeof window !== "undefined" && window.innerHeight * 6755}
          bg="black"
          position="relative"
        >
          <SimpleGrid
            columns={columnCount}
            variants={container}
            as={motion.ul}
            height="100vh"
            width="100vw"
            initial="hidden"
            animate="show"
            position="fixed"
            top="0"
            zIndex="2"
            sx={{
              "grid-gap": `${yPos / 40}px`,
            }}
          >
            <CubeList cubeCount={cubeCount} yPos={yPos} />
          </SimpleGrid>
          <Box
            position="fixed"
            bottom={4}
            right={4}
            bg="blackAlpha.600"
            zIndex="3"
          >
            <UnorderedList
              listStyleType="none"
              display="flex"
              gap={2}
              p={2}
              m={0}
            >
              <ListItem
                as={Link}
                zIndex={1}
                href="https://www.linkedin.com/in/samageloff/"
                target="_blank"
                color="white"
              >
                Resume
              </ListItem>
              <ListItem
                as={Link}
                zIndex={1}
                href="resume.pdf"
                target="_blank"
                color="white"
              >
                LinkedIn
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </>
    )
  );
}
