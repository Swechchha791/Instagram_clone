import { Container } from "@chakra-ui/react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>Content</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost img="/img4.jpeg" username="DP" avatar="img4.jpeg" />
          <FeedPost img="/img1.jpeg" username="Swechchha" avatar="img1.jpeg" />
          <FeedPost img="/img2.jpeg" username="Ishu" avatar="img2.jpeg" />
          <FeedPost img="/img3.jpeg" username="Apeksha" avatar="img3.jpeg" />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
