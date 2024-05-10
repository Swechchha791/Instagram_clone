import React from "react";
import {
  Avatar,
  Divider,
  Flex,
  GridItem,
  Image,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import PostFooter from "../FeedPosts/PostFooter";
// Import Caption component if available

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GridItem
        cursor={"pointer"}
        overflow={"hidden"}
        borderRadius={4}
        aspectRatio={1 / 1}
        position={"relative"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          top={0}
          left={0}
          right={0}
          bottom={0}
          position={"absolute"}
          _hover={{ opacity: 1 }}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                58
              </Text>
            </Flex>

            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                20
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={img}
          alt="profile post"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "3xl", md: "5xl" }}
      >
        <ModalOverlay />
        <ModalContent
          bg={"#010c2d"}
          boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.2)"}
        >
          <ModalCloseButton />
          <ModalBody pb={5}>
            <Flex
              gap="4"
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
              maxH={"90vh"}
              minH={"50vh"}
            >
              <Box
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src="/img1.jpeg" alt="profile post" w={"full"} />
              </Box>
              <Flex
                flex={1}
                flexDir={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar
                      src="/profilepic.jpg"
                      size={"sm"}
                      name="Web-developer"
                    />
                    <Text fontWeight={"bold"} fontSize={12}>
                      {/* {userProfile.username} */} Web-developer
                    </Text>
                  </Flex>
                  <Button
                    size={"sm"}
                    bg={"transparent"}
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    p={1}
                    // onClick={handleDeletePost}
                    // isLoading={isDeleting}
                  >
                    <MdDelete size={20} cursor="pointer" />
                  </Button>
                </Flex>
                <Divider my={4} bg={"gray.500"} />

                <VStack
                  w="full"
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                >
                  <Comment
                    createdAt="4d ago"
                    username="developer"
                    profilePic="/profilepic.jpeg"
                    text={"Amazing"}
                  />
                  <Comment
                    createdAt="2d ago"
                    username="Coder"
                    profilePic="/profilePic.jpeg"
                    text={"Nice view"}
                  />
                  <Comment
                    createdAt="2d ago"
                    username="UI/UX designer"
                    profilePic="/profilePic2.jpeg"
                    text={"Awesome"}
                  />
                  <Comment
                    createdAt="1d ago"
                    username="App_developer"
                    profilePic="/profilePic3.jpeg"
                    text={"Nice click"}
                  />
                  {/* Render comments if available */}
                  {/* <Comment
                    createdAt="id ago"
                    username="Web-developer"
                    profilePic="/profilepic.jpeg"
                    text={"Dummy data"}
                  /> */}
                  {/* Render caption if available */}
                  {/* {post.caption && <Caption post={post} />} */}
                  {/* Render comments */}
                  {/* {post.comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                  ))} */}
                </VStack>
                <Divider my={4} bg={"gray.8000"} />

                {/* Render post footer if available */}
                <PostFooter isProfilepage={true} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
