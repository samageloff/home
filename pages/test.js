import { Container, Heading, Text, Link } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <Container
      maxW="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="center"
    >
      <Head>
        <title>Sam Ageloff</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Heading color="blackAlpha.800" mb={1} as="h1" fontSize="16vw">
        Sam Ageloff
      </Heading>
    </Container>
  );
}
