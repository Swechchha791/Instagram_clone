import { useState, useRef } from "react";
import {
  Box,
  Flex,
  Text,
  InputGroup,
  Input,
  Button,
  InputRightElement,
} from "@chakra-ui/react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";

const PostFooter = ({ username, isProfilePage, post }) => {
  // const [liked, setLiked] = useState(false);
  // const [likes, setLikes] = useState(1000);
  const [comment, setComment] = useState(" ");
  const commentRef = useRef(null);
  const authUser = useAuthStore((state) => state.user);
  const { isCommenting, handlePostComment } = usePostComment();
  const { isLiked, likes, handleLikePost } = useLikePost(post);

  const handleSubmitPostComment = async () => {
    await handlePostComment(post.id, comment);
    setComment(" ");
  };

  // const handleLike = () => {
  //   if (liked) {
  //     setLiked(false);
  //     setLikes(likes - 1);
  //   } else {
  //     setLiked(true);
  //     setLikes(likes + 1);
  //   }
  // };

  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} mt={4} mb={2} pt={0}>
        <Box
          cursor={"pointer"}
          fontSize={18}
          onClick={handleLikePost}
          transition={"0.2s ease-in-out"}
        >
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box
          cursor={"pointer"}
          fontSize={18}
          transition={"0.2s ease-in-out"}
          onClick={() => commentRef.current.focus()}
        >
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>

      {isProfilePage && (
        <>
          <Text fontWeight={700} fontSize={"sm"}>
            {username}{" "}
            <Text as="span" fontWeight={400}>
              Feeling amazed
            </Text>
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            View all 1,000 Comments
          </Text>
        </>
      )}
      {authUser && (
        <Flex alignItems={"center"} justifyContent={"space-between"} gap={2}>
          <InputGroup>
            <Input
              variant={"flushed"}
              color={"gray"}
              placeholder={"Add a Comment..."}
              fontSize={14}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              ref={commentRef}
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
                onClick={handleSubmitPostComment}
                isLoading={isCommenting}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
    </Box>
  );
};

export default PostFooter;
