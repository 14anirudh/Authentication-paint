// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt13MF0kcV2MC1A87XH-YkhWPxwcncgsM",
  authDomain: "email-verification-86f8c.firebaseapp.com",
  projectId: "email-verification-86f8c",
  storageBucket: "email-verification-86f8c.appspot.com",
  messagingSenderId: "874779898289",
  appId: "1:874779898289:web:8a6c50438d5d7b15ee4d90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
