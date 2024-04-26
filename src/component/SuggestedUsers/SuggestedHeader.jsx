import { Flex, Text, Avatar, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="Web developer" size={"lg"} src="/profilepic.jpg" />
        <Text fontSize={12} fontWeight={"bold"}>
          Web_developer_
        </Text>
        {/* <Link to={`${authUser.username}`}>
          <Avatar size={"lg"} src={authUser.profilePicURL} />
        </Link>
        <Link to={`${authUser.username}`}>
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser.username}
          </Text>
        </Link> */}
      </Flex>
      <Link
        size={"xs"}
        to={"/auth"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
      >
        Log out
      </Link>
      {/* <Button
        size={"xs"}
        background={"transparent"}
        _hover={{ background: "transparent" }}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        onClick={handleLogout}
        isLoading={isLoggingOut}
        cursor={"pointer"}
      >
        Log out
      </Button> */}
    </Flex>
  );
};

export default SuggestedHeader;
