import { Box, Flex, Spinner } from "@chakra-ui/react";
import SideBar from "../../component/SideBar/SideBar";
import Navbar from "../../component/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && !loading && pathname !== "/auth";

  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayoutSpinner />;

  return (
    <Flex flexDir={canRenderNavbar ? "column" : "row"}>
      {/* left sidebar */}
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <SideBar />
        </Box>
      ) : null}
      {/* Navbar */}
      {canRenderNavbar ? <Navbar /> : null}
      {/*  Right content */}
      <Box
        flex={1}
        w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;

const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDir="column"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" />
    </Flex>
  );
};

// import { Flex, Box, Spinner } from "@chakra-ui/react";
// import { useLocation } from "react-router-dom";
// import SideBar from "../../component/SideBar/SideBar";
// import Navbar from "../../component/Navbar/Navbar";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../firebase/firebase";

// const PageLayout = ({ children }) => {
//   const { pathname } = useLocation();
//   const { user, loading } = useAuthState(auth);
//   const isRenderSidebar = pathname !== "/auth" && user;
//   const isRenderNavbar = !user && !loading && pathname !== "/auth";

//   const checkingUserIsAuth = !user && loading;
//   if (checkingUserIsAuth) return <layoutSpinner />;

//   return (
//     <Flex flexDir={isRenderNavbar ? "column" : "row"}>
//       {/* Left Side bar */}
//       {isRenderSidebar ? (
//         <Box w={{ base: "70px", md: "240px" }}>
//           <SideBar />
//         </Box>
//       ) : null}

//       {/* Render Navbar */}
//       {isRenderNavbar ? <Navbar /> : null}

//       {/* Right Page Content */}
//       <Box
//         flex={1}
//         w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
//         mx={"auto"}
//       >
//         {children}
//       </Box>
//     </Flex>
//   );
// };

// export default PageLayout;

// const layoutSpinner = () => {
//   return (
//     <Flex
//       flexDir="column"
//       h="100vh"
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Spinner size="xl" />
//     </Flex>
//   );
// };
