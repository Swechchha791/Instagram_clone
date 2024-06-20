import { Avatar, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";
import useUserProfileStore from "../../store/userProfileStore";

const Caption = ({ post }) => {
  const userProfile = useUserProfileStore((state) => state.userProfile);

  return (
    <Flex gap={4} alignItems="center">
      <Link to={`/${userProfile.username}`}>
        <Avatar src={userProfile.profilePicURL} size={"sm"} />
      </Link>
      <Flex direction={"column"} flex="1">
        <Flex gap={2} alignItems={"center"}>
          <Link to={`/${userProfile.username}`}>
            <Text fontWeight={"bold"} fontSize={12}>
              {userProfile.username}
            </Text>
          </Link>
          <Text fontSize={12} color={"gray"}>
            {timeAgo(post.createdAt)}
          </Text>
        </Flex>
        <Text
          fontSize={14}
          whiteSpace="pre-wrap" // Preserve whitespace and line breaks
          overflowWrap="break-word" // Break long words
          wordBreak="break-word" // Break long words
          color="white"
        >
          {post.caption}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Caption;
