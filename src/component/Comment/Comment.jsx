import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";

const Comment = ({ createdAt, profilePic, username, text }) => {
  return (
    <Flex gap={4}>
      {/* <Link to={`/${userProfile.username}`}> */}
      <Avatar src={profilePic} size={"sm"} name={username} />
      {/* </Link> */}
      <Flex direction={"column"}>
        <Flex gap={2} alignItems={"center"}>
          {/* <Link to={`/${userProfile.username}`}> */}
          <Text fontWeight={"bold"} fontSize={12}>
            {username}
          </Text>
          {/* </Link> */}
          <Text fontSize={14}>{text}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {/* {timeAgo(comment.createdAt)} */}
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
