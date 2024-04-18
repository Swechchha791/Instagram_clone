import {
  Box,
  Flex,
  Text,
  InputGroup,
  Input,
  Button,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";

const PostFooter = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Box mb={10}>
      <Flex alignItems={"center"} gap={4} w={"full"} mt={4} mb={2} pt={0}>
        <Box
          onClick={handleLike}
          cursor={"pointer"}
          fontSize={18}
          transition={"0.2s ease-in-out"}
        >
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box cursor={"pointer"} fontSize={18} transition={"0.2s ease-in-out"}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      <Text fontWeight={700} fontSize={"sm"}>
        Webdeveloper_{" "}
        <Text as="span" fontWeight={400}>
          Feeling amazed
        </Text>
      </Text>
      <Text fontSize={"sm"} color={"gray"}>
        View all 1,000 Comments
      </Text>
      <Flex alignItems={"center"} justifyContent={"space-between"} gap={2}>
        <InputGroup>
          <Input
            variant={"flushed"}
            color={"gray"}
            placeholder={"Add a Comment..."}
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              fontWeight={600}
              color={"blue.500"}
              _hover={{
                color: "white",
              }}
              bg={"transparent"}
              transition={"0.2s ease-in-out"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
