import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

const useShowToast = () => {
  const toast = useToast();

  //useCallback used to prevent infinite loop, by caching the function
  const showToast = useCallback(
    (title, description, status) => {
      toast({
        title: title,
        description: description,
        status: status,
        duration: 3000,
        isClosable: true,
        variant: "top-accent",
        position: "bottom-right",
      });
    },
    [toast]
  );

  return showToast;
};

export default useShowToast;
