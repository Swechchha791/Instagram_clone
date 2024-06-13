import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useLogout = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const showToast = useShowToast();
  // const logoutUser = useAuthStore((state) => state.logout);
  const { logout } = useAuthStore();

  const logoutUser = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
      logout();
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { logoutUser, isLoggingOut, error };
};

export default useLogout;
