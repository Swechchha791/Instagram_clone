import { Box, Flex, Link } from "@chakra-ui/react";
import {
  CreatePostLogo,
  InstagramLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";
import { InstagramMobileLogo } from "../../assets/constants";
import { Link as RouterLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { Avatar } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";

const SideBar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="Swechchha" src="/profilepic.jpg" />,
      text: "Profile",
      link: "/asaprogrammer",
    },
  ];
  return (
    <Box
      height="100vh"
      top={0}
      left={0}
      py={8}
      px={{ base: 2, md: 4 }}
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
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              hasArrow
              ml={1}
              key={index}
              label={item.text}
              placement={"right"}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={item.link || null}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                {item.icon}{" "}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        <Tooltip
          hasArrow
          ml={1}
          label={"Log out"}
          placement={"right"}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Link
            display={"flex"}
            to={"/auth"}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            mt={"auto"}
          >
            <BiLogOut size={25} />
            <Box display={{ base: "none", md: "block" }}>Log out</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default SideBar;
