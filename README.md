# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- Firebase Security Rule (But It's not working)-->
<!-- rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

   match /users/{userId} {
      allow read;
      allow write: if request.auth != null && request.auth.uid == userId;
   }

   match /posts/{postId} {
      allow read;
      allow create: if request.auth != null;
      allow update: if request.auth != null && request.auth.uid == resource.data.createdBy;
      allow delete: if request.auth != null && request.auth.uid == resource.data.createdBy
   }

  }
} -->

<!-- My security Rule is here (Working) -->
<!-- rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

   match /users/{userId} {
      allow read;
      allow write: if request.auth != null;
   }

   match /posts/{postId} {
      allow read;
      allow create: if request.auth != null;
      allow update: if request.auth != null;
      allow delete: if request.auth != null && request.auth.uid == resource.data.createdBy
   }
  }
} -->
