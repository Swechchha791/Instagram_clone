import { Box, Flex, Link } from "@chakra-ui/react";
import { InstagramLogo } from "../../assets/constants";
import { InstagramMobileLogo } from "../../assets/constants";
import { Link as RouterLink } from "react-router-dom";

const SideBar = () => {
  return (
    <Box
      height="100vh"
      top={0}
      left={0}
      py={8}
      px={{ base: 2, ms: 4 }}
      position={"sticky"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
    >
      <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={10}
          cursor={"pointer"}
        >
          <InstagramMobileLogo />
        </Link>
      </Flex>
    </Box>
  );
};

export default SideBar;
