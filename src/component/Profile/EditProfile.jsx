import { useState, useRef, useEffect } from "react";
import {
  Avatar,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import useAuthStore from "../../store/authStore";
import usePreviewImg from "../../hooks/usePreviewImg";
import useEditProfile from "../../hooks/useEditProfile";

const EditProfile = ({ isOpen, onClose }) => {
  const authUser = useAuthStore((state) => state.user);
  const fileRef = useRef(null);
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    bio: "",
  });
  const { selectedFile, handleImageChange, setSelectedFile } = usePreviewImg();
  const { editProfile, isUpdating } = useEditProfile();

  useEffect(() => {
    if (authUser) {
      setInputs({
        fullName: authUser.fullName,
        username: authUser.username,
        bio: authUser.bio,
      });
    }
  }, [authUser]);

  const handleEditProfile = async () => {
    try {
      await editProfile(inputs, selectedFile);
      setSelectedFile(null);
      onClose();
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  const handleClose = () => {
    setInputs({
      fullName: authUser.fullName,
      username: authUser.username,
      bio: authUser.bio,
    });
    setSelectedFile(null);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent
        bg={"#010c2d"}
        boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.2)"}
        border={"1px solid gray"}
        mx={3}
      >
        <ModalHeader />
        <ModalCloseButton />
        <ModalBody>
          <Flex>
            <Stack
              spacing={4}
              w={"full"}
              maxW={"md"}
              bg={"transparent"}
              p={6}
              my={0}
            >
              <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                Edit Profile
              </Heading>
              <FormControl>
                <Stack direction={["column", "row"]} spacing={6}>
                  <Center>
                    <Avatar
                      size="xl"
                      src={selectedFile || authUser.profilePicURL}
                      border={"2px solid white "}
                    />
                  </Center>
                  <Center w="full">
                    <Button w="full" onClick={() => fileRef.current.click()}>
                      Edit Profile Picture
                    </Button>
                  </Center>
                  <Input
                    type="file"
                    hidden
                    ref={fileRef}
                    onChange={handleImageChange}
                  />
                </Stack>
              </FormControl>

              <FormControl>
                <FormLabel fontSize={"sm"}>Full Name</FormLabel>
                <Input
                  placeholder={"Full Name"}
                  size={"sm"}
                  type={"text"}
                  value={inputs.fullName}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel fontSize={"sm"}>Username</FormLabel>
                <Input
                  placeholder={"Username"}
                  size={"sm"}
                  type={"text"}
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                />
              </FormControl>

              <FormControl>
                <FormLabel fontSize={"sm"}>Bio</FormLabel>
                <Input
                  placeholder={"Bio"}
                  size={"sm"}
                  type={"text"}
                  value={inputs.bio}
                  onChange={(e) =>
                    setInputs({ ...inputs, bio: e.target.value })
                  }
                />
              </FormControl>

              <Stack spacing={6} direction={["column", "row"]}>
                <Button
                  bg={"red.400"}
                  color={"white"}
                  w="full"
                  size="sm"
                  _hover={{ bg: "red.500" }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  size="sm"
                  w="full"
                  _hover={{ bg: "blue.500" }}
                  isLoading={isUpdating}
                  onClick={handleEditProfile}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditProfile;
