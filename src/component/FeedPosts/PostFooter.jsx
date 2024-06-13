import { useState, useRef } from "react";
import {
  Box,
  Flex,
  Text,
  InputGroup,
  Input,
  Button,
  useDisclosure,
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
import CommentsModal from "../Comment/CommentsModal";
import { timeAgo } from "../../utils/timeAgo";

const PostFooter = ({ isProfilePage, post, creatorProfile }) => {
  // const [liked, setLiked] = useState(false);
  // const [likes, setLikes] = useState(1000);
  const [comment, setComment] = useState("");
  const commentRef = useRef(null);
  const authUser = useAuthStore((state) => state.user);
  const { isCommenting, handlePostComment } = usePostComment();
  const { isLiked, likes, handleLikePost } = useLikePost(post);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmitPostComment = async () => {
    if (comment.trim() === "") return;
    await handlePostComment(post.id, comment);
    setComment("");
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
          {isLiked ? <UnlikeLogo /> : <NotificationsLogo />}
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
        <Text fontSize="12" color={"gray"}>
          Posted {timeAgo(post.createdAt)}
        </Text>
      )}

      {!isProfilePage && (
        <>
          <Text fontSize="sm" fontWeight={700}>
            {creatorProfile?.username}{" "}
            <Text as="span" fontWeight={400}>
              {post.caption}
            </Text>
          </Text>
          {post.comments.length > 0 && (
            <Text
              fontSize="sm"
              color={"gray"}
              cursor={"pointer"}
              onClick={onOpen}
            >
              View all {post.comments.length} comments
            </Text>
          )}
          {isOpen ? (
            <CommentsModal isOpen={isOpen} onClose={onClose} post={post} />
          ) : null}
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
