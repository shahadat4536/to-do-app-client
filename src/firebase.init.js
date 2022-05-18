import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB20mi4Xzx_XSvoLLxqZ-Rw-4iMeK735hM",
  authDomain: "to-do-app-4633f.firebaseapp.com",
  projectId: "to-do-app-4633f",
  storageBucket: "to-do-app-4633f.appspot.com",
  messagingSenderId: "475951784451",
  appId: "1:475951784451:web:e5c19ffa823de822f42436",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
