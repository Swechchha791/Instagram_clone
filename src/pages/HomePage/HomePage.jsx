import { Container, Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import FeedPosts from "../../component/FeedPosts/FeedPosts";
import SuggestedUsers from "../../component/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  // Determine if the current viewport is large or not
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20} direction={{ base: "column", lg: "row" }}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        {isLargeScreen && (
          <Box
            flex={3}
            mr={15}
            display={{ base: "none", lg: "block" }}
            maxW={"300px"}
          >
            <SuggestedUsers />
          </Box>
        )}
      </Flex>
      {!isLargeScreen && (
        <Box mt={10}>
          <SuggestedUsers />
        </Box>
      )}
    </Container>
  );
};

export default HomePage;

// import { Container, Box, Flex } from "@chakra-ui/react";
// import FeedPosts from "../../component/FeedPosts/FeedPosts";
// import SuggestedUsers from "../../component/SuggestedUsers/SuggestedUsers";

// const HomePage = () => {
//   return (
//     <Container maxW={"container.lg"}>
//       <Flex gap={20}>
//         <Box flex={2} py={10}>
//           <FeedPosts />
//         </Box>
//         <Box
//           flex={3}
//           mr={15}
//           display={{ base: "row", lg: "block" }}
//           maxW={"300px"}
//         >
//           <SuggestedUsers />
//         </Box>
//       </Flex>
//     </Container>
//   );
// };

// export default HomePage;
