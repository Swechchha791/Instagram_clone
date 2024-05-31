import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import useUserProfileStore from "../store/userProfileStore";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";

const useFollowUser = (userId) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const { userProfile, setUserProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const showToast = useShowToast();

  const handleFollowUser = async () => {
    setIsUpdating(true);
    try {
      const currentUserRef = doc(firestore, "users", authUser.uid);
      const userToFollowOrUnfollorRef = doc(firestore, "users", userId);
      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
      });

      await updateDoc(userToFollowOrUnfollorRef, {
        followers: isFollowing
          ? arrayRemove(authUser.uid)
          : arrayUnion(authUser.uid),
      });

      if (isFollowing) {
        // Unfollow the user
        setAuthUser({
          ...authUser,
          following: authUser.following.filter((uid) => uid !== userId),
        });
        if (userProfile)
          setUserProfile({
            ...userProfile,
            followers: userProfile.followers.filter(
              (uid) => uid !== authUser.uid
            ),
          });

        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...authUser,
            following: authUser.following.filter((uid) => uid !== userId),
          })
        );
        setIsFollowing(false);
      } else {
        // Follow the user
        setAuthUser({
          ...authUser,
          following: [...authUser.following, userId],
        });

        if (userProfile)
          setUserProfile({
            ...userProfile,
            followers: [...userProfile.followers, authUser.uid],
          });

        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...authUser,
            following: [...authUser.following, userId],
          })
        );
        setIsFollowing(true);
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    if (authUser) {
      const isFollowing = authUser.following.includes(userId);
      setIsFollowing(isFollowing);
    }
  }, [authUser, userId]);

  return { isUpdating, isFollowing, handleFollowUser };
};

export default useFollowUser;
