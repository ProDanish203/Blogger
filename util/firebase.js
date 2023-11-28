import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTHDOMAIN,
//   projectId: process.env.FIREBASE_PROJECTID,
//   storageBucket: process.env.FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDERID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID 
// };

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "bloggerv2-b3171.firebaseapp.com",
  projectId: "bloggerv2-b3171",
  storageBucket: "gs://bloggerv2-b3171.appspot.com",
  messagingSenderId: "875049544568",
  appId: "1:875049544568:web:937885fc625e1da455f68d",
  measurementId: "G-LFBGK8HHWK"  
};

export const app = initializeApp(firebaseConfig);