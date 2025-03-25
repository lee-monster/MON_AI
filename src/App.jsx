import { Box, Heading, Text, Button, Container, Flex } from '@chakra-ui/react';

function App() {
  return (
    <Container maxW="full" p={0}>
      {/* 상단 내비게이션 바 */}
      <Flex
        as="nav"
        justify="space-between"
        align="center"
        p={4}
        position="fixed"
        w="100%"
        bg="rgba(0,0,0,0.8)"
        zIndex={1}
      >
        <Heading color="white">MON.AI</Heading>
        <Button variant="ghost" color="white">
          Contact
        </Button>
      </Flex>

      {/* Hero 섹션 - 배경 이미지 적용 */}
      <Box
        h="100vh"
        bgImage="url('/tiger-space.jpg')"
        bgSize="cover"
        bgPos="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flex direction="column" align="center" color="white" textAlign="center" px={4}>
          <Heading size="2xl" mb={4}>
            A Cosmic Leap in Intelligence
          </Heading>
          <Text fontSize="xl" mb={6}>
            MON.AI explores the universe of possibilities with AI-driven innovation.
          </Text>
          <Button colorScheme="blue" size="lg">
            Explore Now
          </Button>
        </Flex>
      </Box>

      {/* About 섹션 */}
      <Box bg="gray.900" color="gray.200" py={20}>
        <Container maxW="container.md">
          <Heading size="xl" mb={4}>
            About MON.AI
          </Heading>
          <Text fontSize="lg">
            MON.AI delivers AI-driven innovations, transforming your operational efficiency and driving sustainable growth.
          </Text>
        </Container>
      </Box>

      {/* Footer */}
      <Flex bg="gray.800" color="gray.400" justify="center" py={6}>
        <Text>© 2025 MON.AI. All rights reserved.</Text>
      </Flex>
    </Container>
  );
}

export default App;
