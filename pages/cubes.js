import { memo, useEffect, useCallback, useState } from "react";
import { getColumnCount, getRowCount } from "@app/utils";
import { motion, useScroll } from "framer-motion";
import { SimpleGrid, Box, theme } from "@chakra-ui/react";

const COUNT = 64;
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
      return (
        <Box
          as={motion.li}
          bg={() => manyRandomColors}
          listStyleType="none"
          key={index}
          variants={listItem}
          zIndex="2"
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
      setYPos(latest);
    });
  }, []);

  return (
    cubeCount && (
      <Box
        height={typeof window !== "undefined" && window.innerHeight * 3}
        bg="black"
      >
        <SimpleGrid
          columns={columnCount}
          variants={container}
          spacing={yPos / 40}
          as={motion.ul}
          height="100vh"
          width="100vw"
          initial="hidden"
          animate="show"
          position="fixed"
          top="0"
          zIndex="2"
        >
          <CubeList cubeCount={cubeCount} yPos={yPos} />
        </SimpleGrid>
      </Box>
    )
  );
}
