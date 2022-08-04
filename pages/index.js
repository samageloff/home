import { Container, Heading, Text, Link } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container maxW="6xl" height="100vh" display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
      <Heading mb={1} as="h1" fontSize="xl">Sam Ageloff</Heading>
      <Heading mb={4} as="h3" fontSize="md">A website subtitle</Heading>
      <Text>Hi there.</Text> 
      <Text>Thanks for stopping by.</Text>
      <Text>I'm a software engineer @<Link textDecoration="underline" isExternal href="https://stockx.com">StockX</Link>.</Text>
      <Text>I make <Link textDecoration="underline" isExternal href="http://www.soundcloud.com/samageloff">music</Link> from time to time.</Text> 
      <Text>I live with my lovely and talented <Link textDecoration="underline" isExternal href="http://www.rachelannawalker.com/">wife</Link>, our son and cat, in Oak Park, Il.</Text>
    </Container>
  );
}
