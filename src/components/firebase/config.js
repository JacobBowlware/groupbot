import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCUy63Pb64Zib-TgRNUTbisp0UHEyjVNfw",
    authDomain: "group-bot-a78f2.firebaseapp.com",
    projectId: "group-bot-a78f2",
    storageBucket: "group-bot-a78f2.appspot.com",
    messagingSenderId: "376880631203",
    appId: "1:376880631203:web:3d62e9f21c5f95b7301e16",
    measurementId: "G-WB978ZLVP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);