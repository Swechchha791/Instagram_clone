import { useState } from "react";
import { deleteObject, ref, getMetadata } from "firebase/storage";
import { firestore, storage } from "../../firebase/firebase";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
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
import useAuthStore from "../../store/authStore";
import usePostStore from "../../store/postStore";
import PostFooter from "../FeedPosts/PostFooter";
import useUserProfileStore from "../../store/userProfileStore";
import useShowToast from "../../hooks/useShowToast";
import Caption from "../Comment/Caption";

const ProfilePost = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDeleting, setIsDeleting] = useState(false);
  const showToast = useShowToast();
  const authUser = useAuthStore((state) => state.user);
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const deletePost = usePostStore((state) => state.deletePost);
  const deleteProfilePost = useUserProfileStore((state) => state.deletePost);

  const handleDeletePost = async () => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    if (isDeleting) return;

    setIsDeleting(true);

    try {
      const imageRef = ref(storage, `posts/${post.id}`);

      // Check if the image exists
      try {
        await getMetadata(imageRef);
        await deleteObject(imageRef);
      } catch (error) {
        if (error.code === "storage/object-not-found") {
          console.warn("Image does not exist, skipping deleteObject.");
        } else {
          throw error;
        }
      }

      const userRef = doc(firestore, "users", authUser.uid);
      await deleteDoc(doc(firestore, "posts", post.id));

      await updateDoc(userRef, {
        posts: arrayRemove(post.id),
      });

      deletePost(post.id);
      deleteProfilePost(post.id);
      showToast("Success", "Post deleted successfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsDeleting(false);
    }
  };

  if (!post || Object.keys(post).length === 0) {
    return null; // No post data, render nothing
  }

  return (
    <>
      <GridItem
        key={post.id}
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
                {post.likes.length}
              </Text>
            </Flex>

            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                {post.comments.length}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={post.imageURL}
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
        size={{ base: "full", md: "5xl" }}
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
              flexDirection={{ base: "column", md: "row" }}
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
                <Image
                  src={post.imageURL}
                  alt="profile post"
                  w={"full"}
                  h={{ base: "auto", md: "full" }}
                  maxH={{ base: "60vh", md: "full" }}
                  objectFit={"cover"}
                />
              </Box>
              <Flex flex={1} flexDir={"column"} px={10} pt={{ base: 4, md: 0 }}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar
                      src={userProfile.profilePicURL}
                      size={"sm"}
                      name="Web-developer"
                    />
                    <Text fontWeight={"bold"} fontSize={12}>
                      {userProfile.username}
                    </Text>
                  </Flex>
                  {authUser?.uid === userProfile.uid && ( // delete button will show only on author's post
                    <Button
                      size={"sm"}
                      bg={"transparent"}
                      _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                      borderRadius={4}
                      p={1}
                      onClick={handleDeletePost}
                      isLoading={isDeleting}
                    >
                      <MdDelete size={20} cursor="pointer" />
                    </Button>
                  )}
                </Flex>
                <Divider my={4} bg={"gray.500"} />

                <VStack
                  w="full"
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                >
                  {/* Caption */}
                  {post.caption && <Caption post={post} />}
                  {/* comments */}
                  {post.comments.map((comment, index) => (
                    <Comment key={comment.id || index} comment={comment} />
                  ))}
                </VStack>
                <Divider my={4} bg={"gray.8000"} />

                <PostFooter isProfilePage={true} post={post} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
