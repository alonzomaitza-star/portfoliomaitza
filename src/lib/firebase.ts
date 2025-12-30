import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCo6SUct1Eq8a8mZh6LSY2TVMjHfwR_NEA",
    authDomain: "insanologin.firebaseapp.com",
    projectId: "insanologin",
    storageBucket: "insanologin.firebasestorage.app",
    messagingSenderId: "657046808204",
    appId: ""
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
