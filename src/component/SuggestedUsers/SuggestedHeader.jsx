import React from "react";
import { Flex, Text, Avatar, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../firebase/firebase";
import useAuthStore from "../../store/authStore";

const SuggestedHeader = () => {
  const { logoutUser, isLoggingOut } = useLogout();
  // const [authUser] = useAuthState(auth);
  const authUser = useAuthStore((state) => state.user);
  if (!authUser) return null;

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authUser.username}`}>
          <Avatar
            name={authUser.username || ""}
            size={"md"}
            src={authUser.profilePicURL || ""}
          />
        </Link>
        <Link to={`/${authUser.username}`}>
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser.username || ""}
          </Text>
        </Link>
      </Flex>
      <Button
        size={"xs"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        onClick={logoutUser}
        isLoading={isLoggingOut}
        cursor={"pointer"}
        _hover={{ background: "transparent" }}
        background={"transparent"}
      >
        Log out
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
