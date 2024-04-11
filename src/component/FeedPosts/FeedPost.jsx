import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const FeedPost = () => {
  return (
    <>
      <PostHeader />
      <Box my={2} overflow={"hidded"}>
        <Image
          src="/img4.jpeg"
          borderRadius={6}
          alt="User profile pic"
          w={"full"}
        />
      </Box>
      <PostFooter />
    </>
  );
};

export default FeedPost;
