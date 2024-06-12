import { create } from "zustand";

const useUserProfileStore = create((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  addPost: (post) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        posts: [...(state.userProfile.posts || []), post.id], // Correctly append the new post ID to the array
      },
    })),
  deletePost: (postId) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        posts: (state.userProfile.posts || []).filter((id) => id !== postId), // Safely handle case when posts might be undefined
      },
    })),
}));

export default useUserProfileStore;

// import { create } from "zustand";

// const useUserProfileStore = create((set) => ({
//   userProfile: null,
//   setUserProfile: (userProfile) => set({ userProfile }),
//   // will apdate the np of posts in the profile page
//   addPost: (post) =>
//     set((state) => ({
//       userProfile: {
//         ...state.userProfile,
//         posts: post.id,
//         ...state.userProfile.posts,
//       },
//     })),
//   deletePost: (postId) =>
//     set((state) => ({
//       userProfile: {
//         ...state.userProfile,
//         posts: state.userProfile.posts.filter((id) => id !== postId),
//       },
//     })),
// }));

// export default useUserProfileStore;
