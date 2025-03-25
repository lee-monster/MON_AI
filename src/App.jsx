import { Box, Heading, Text, Button, Container, Flex, Image } from '@chakra-ui/react';

function App() {
  return (
    <Container maxW="full" p={0}>
      <Flex as="nav" justify="space-between" align="center" p={4} position="fixed" w="100%" bg="rgba(0,0,0,0.8)" zIndex={1}>
        <Heading color="white">MON.AI</Heading>
        <Button variant="ghost" color="white">Contact</Button>
      </Flex>

      <Box h="100vh" bgImage="url('/path-to-your-image.jpg')" bgSize="cover" bgPos="center" display="flex" justifyContent="center" alignItems="center">
        <Flex direction="column" align="center" color="white" textAlign="center">
          <Heading size="2xl" mb={4}>Empowering your business with AI</Heading>
          <Text fontSize="xl" mb={6}>Cutting-edge solutions designed for future growth.</Text>
          <Button colorScheme="blue" size="lg">Learn More</Button>
        </Flex>
      </Box>

      <Box bg="gray.900" color="gray.200" py={20}>
        <Container maxW="container.md">
          <Heading size="xl" mb={4}>About MON.AI</Heading>
          <Text fontSize="lg">
            MON.AI delivers AI-driven innovations, transforming your operational efficiency and driving sustainable growth.
          </Text>
        </Container>
      </Box>

      <Flex bg="gray.800" color="gray.400" justify="center" py={6}>
        <Text>© 2025 MON.AI. All rights reserved.</Text>
      </Flex>
    </Container>
  );
}

export default App;