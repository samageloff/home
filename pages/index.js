import { Container, Heading, Text, Link } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <Container maxW="xl" height="100vh" display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
      <Head>
        <title>Sam Ageloff</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Heading color="blackAlpha.800" mb={1} as="h1" fontSize="xl">Sam Ageloff</Heading>
      <Heading color="blackAlpha.700" mb={4} as="h3" fontSize="md">A website subtitle</Heading>
      <Text color="blackAlpha.700">Hi there.</Text> 
      <Text color="blackAlpha.700">Thanks for stopping by.</Text>
      <Text color="blackAlpha.700">I'm a software engineer @<Link textDecoration="underline" isExternal href="https://stockx.com">StockX</Link>.</Text>
      <Text color="blackAlpha.700">I make <Link textDecoration="underline" isExternal href="http://www.soundcloud.com/samageloff">music</Link> from time to time.</Text> 
      <Text color="blackAlpha.700">I live with my lovely and talented <Link textDecoration="underline" isExternal href="http://www.rachelannawalker.com/">wife</Link>, our son and cat, in Oak Park, Il.</Text>
    </Container>
  );
}
