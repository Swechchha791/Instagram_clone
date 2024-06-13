import { Avatar, Flex, Box, VStack, Button } from "@chakra-ui/react";
import useFollowUser from "../../hooks/useFollowUser";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

const SuggestedUser = ({ user, setUser }) => {
  const authUser = useAuthStore((state) => state.user);
  const { isUpdating, isFollowing, handleFollowUser } = useFollowUser(user.uid);

  if (!authUser) return null;

  const handleOnFollowUser = async () => {
    await handleFollowUser();

    const currentFollowers = Array.isArray(user.followers)
      ? user.followers
      : [];

    const updatedFollowers = isFollowing
      ? currentFollowers.filter((follower) => follower.uid !== authUser.uid)
      : [...currentFollowers, { uid: authUser.uid }];

    setUser({
      ...user,
      followers: updatedFollowers,
    });
  };

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`/${user.username}`}>
          <Avatar src={user.profilePicURL} size={"md"} />
        </Link>
        <VStack spacing={2} alignItems={"flex-start"}>
          <Link to={`/${user.username}`}>
            <Box fontSize={12} fontWeight={"bold"}>
              {user.fullName}
            </Box>
          </Link>
          <Box fontSize={11} color={"gray.500"}>
            {user.followers.length} followers
          </Box>
        </VStack>
      </Flex>
      {authUser.uid !== user.uid && (
        <Button
          fontSize={13}
          bg={"transparent"}
          p={0}
          h={"max-content"}
          fontWeight={"medium"}
          color={"blue.400"}
          cursor={"pointer"}
          _hover={{ color: "white" }}
          onClick={handleOnFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}
    </Flex>
  );
};

export default SuggestedUser;

// import { Avatar, Flex, Box, VStack, Button } from "@chakra-ui/react";
// import useFollowUser from "../../hooks/useFollowUser";
// import useAuthStore from "../../store/authStore";
// // import { useState } from "react";
// // import { Link } from "react-router-dom";

// const SuggestedUser = ({ user, setUser }) => {
//   // const [isFollowed, setIsFollowed] = useState(false);

//   const { isUpdating, isFollowing, handleFollowUser } = useFollowUser();
//   const authUser = useAuthStore((state) => state.user);
//   if (!authUser) return null;

//   const handleOnFollowUser = async () => {
//     await handleFollowUser();
//     setUser({
//       ...user,
//       followers: isFollowing
//         ? user.followers.filter((follower) => follower.uid !== authUser.uid)
//         : [...user.followers, authUser],
//     });
//   };

//   return (
//     <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
//       <Flex alignItems={"center"} gap={2}>
//         <Avatar src={user.profilePicURL} size={"md"} />
//         <VStack spacing={2} alignItems={"flex-start"}>
//           <Box fontSize={12} fontWeight={"bold"}>
//             {user.username}
//           </Box>
//           <Box fontSize={11} color={"gray.500"}>
//             {user.followers.length} followers
//           </Box>
//         </VStack>
//       </Flex>
//       {authUser.uid !== user.uid && (
//         <Button
//           fontSize={13}
//           bg={"transparent"}
//           p={0}
//           h={"max-content"}
//           fontWeight={"medium"}
//           color={"blue.400"}
//           cursor={"pointer"}
//           _hover={{ color: "white" }}
//           onClick={handleOnFollowUser}
//           isLoading={isUpdating}
//         >
//           {isFollowing ? "Unfollow" : "Follow"}
//         </Button>
//       )}
//     </Flex>
//   );
// };

// export default SuggestedUser;
