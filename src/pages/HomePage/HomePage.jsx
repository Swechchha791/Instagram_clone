import { Container, Box, Flex } from "@chakra-ui/react";
import FeedPosts from "../../component/FeedPosts/FeedPosts";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        <Box
          flex={3}
          mr={15}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
        >
          Suggested User
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
