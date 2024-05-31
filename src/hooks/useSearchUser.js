import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";

const useSearchUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const showToast = useShowToast();

  const getUserProfile = async (username) => {
    setIsLoading(true);
    setUser(null);
    try {
      const qr = query(
        collection(firestore, "users"),
        where("username", "==", username)
      );

      const querySnapshot = await getDocs(qr);
      if (querySnapshot.empty)
        return showToast("Error", "User not found", "error");

      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });

      // const userData = [];
      // querySnapshot.forEach((doc) => {
      //   userData.push(doc.data());
      // });

      // setUser(userData[0]); // Assuming you want the first matching user
    } catch (error) {
      showToast("Error", error.message, "error");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, getUserProfile, user, setUser };
};

export default useSearchUser;
