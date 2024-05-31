import { Flex, VStack, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();

  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      {/* {suggestedUsers.length !== 0 && ( */}
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      {/* )} */}

      {suggestedUsers.map((user) => (
        <SuggestedUser user={user} key={user.id} />
      ))}

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2024 Built By{" "}
        <Link href="#" target="_blank" color="blue.500" fontSize={14}>
          Swechchha
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
