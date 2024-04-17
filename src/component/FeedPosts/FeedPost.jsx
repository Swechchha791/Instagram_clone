import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const FeedPost = ({ username, img, avatar }) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box my={2} overflow={"hidded"}>
        <Image src={img} borderRadius={6} alt={username} w={"full"} />
      </Box>
      <PostFooter username={username} />
    </>
  );
};

export default FeedPost;
