import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAfzs0oSh0Wv-Kan2nnBPV7mK_hxb7gH1c",
    authDomain: "chat-58a77.firebaseapp.com",
    databaseURL: "https://chat-58a77-default-rtdb.firebaseio.com",
    projectId: "chat-58a77",
    storageBucket: "chat-58a77.appspot.com",
    messagingSenderId: "245586096577",
    appId: "1:245586096577:web:e371f3e4d9203035263f40",
    measurementId: "${config.measurementId}",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { provider };
export default auth;
