import { Button, Container, Flex, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container maxW={"container.lg"} my={4}>
      <Flex
        w={"full"}
        justifyContent={{ base: "center", sm: "space-between" }}
        alignItems={"center"}
      >
        {/* <Image
          src="/logo.png"
          h={20}
          display={{ base: "none", sm: "block" }}
          cursor={"pointer"}
        /> */}
        <Box
          pl={2}
          fontSize={30}
          fontWeight="bold"
          fontFamily="Playwrite US Modern"
          bgGradient="linear(to-br, #6e7cf2, #b184f2, #f268a3, #ffb77a, #fff2a5)"
          bgClip="text"
          display={{ base: "none", sm: "block" }}
        >
          Social-hub
        </Box>
        <Flex gap={4}>
          <Link to="/auth">
            <Button colorScheme={"blue"} size={"sm"}>
              Login
            </Button>
          </Link>
          <Link to="/auth">
            <Button variant={"outline"} size={"sm"}>
              Signup
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
