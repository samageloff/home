import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  Tag,
  Image,
} from "@chakra-ui/react";
import Head from "next/head";

const expertise = [
  "Product Design",
  "UX Engineering",
  "Frontend Development",
  "Technical Leadership",
  "Design Systems",
  "Web Performance",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Sam Ageloff</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="A product and UX-focused software engineer, web developer and technical leader, with 20 years experience."
        />
      </Head>
      <Box minHeight="100vh" display="flex" alignItems="center">
        <Container maxW="container.xl" py={[12, 20]}>
          <Flex
            direction={["column-reverse", "row"]}
            gap={[10, 16]}
            align="center"
            justify="space-between"
          >
            <VStack align="flex-start" gap={6} flex={1} maxW={["100%", "560px"]}>
              <Box>
                <Text
                  fontSize={["sm", "md"]}
                  fontWeight="semibold"
                  letterSpacing="widest"
                  textTransform="uppercase"
                  color="blackAlpha.600"
                  mb={2}
                >
                  Software Engineer &amp; Technical Leader
                </Text>
                <Heading
                  as="h1"
                  fontSize={["4xl", "6xl"]}
                  fontWeight="bold"
                  lineHeight={1.05}
                  color="blackAlpha.900"
                >
                  Sam Ageloff
                </Heading>
              </Box>

              <Text fontSize={["md", "lg"]} color="blackAlpha.700" lineHeight={1.7}>
                A product and UX-focused engineer with 20 years of experience
                bridging design and technology. I build thoughtful, performant
                web products — leading teams and driving quality from concept to
                shipped code.
              </Text>

              <Flex wrap="wrap" gap={2}>
                {expertise.map((label) => (
                  <Tag
                    key={label}
                    size="md"
                    bg="blackAlpha.100"
                    color="blackAlpha.800"
                    fontWeight="medium"
                    borderRadius="full"
                    px={3}
                    py={1}
                  >
                    {label}
                  </Tag>
                ))}
              </Flex>

              <HStack gap={5} pt={2}>
                <Link
                  href="https://www.linkedin.com/in/samageloff/"
                  target="_blank"
                  fontWeight="semibold"
                  color="blackAlpha.800"
                  borderBottom="2px solid"
                  borderColor="blackAlpha.400"
                  pb="1px"
                  _hover={{ borderColor: "blackAlpha.800" }}
                >
                  LinkedIn
                </Link>
                <Link
                  href="resume.pdf"
                  target="_blank"
                  fontWeight="semibold"
                  color="blackAlpha.800"
                  borderBottom="2px solid"
                  borderColor="blackAlpha.400"
                  pb="1px"
                  _hover={{ borderColor: "blackAlpha.800" }}
                >
                  Resume
                </Link>
              </HStack>
            </VStack>

            <Box
              width={["140px", "220px"]}
              height={["140px", "220px"]}
              borderRadius="full"
              overflow="hidden"
              flexShrink={0}
              boxShadow="lg"
            >
              <Image
                src="author.jpg"
                alt="Sam Ageloff"
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
