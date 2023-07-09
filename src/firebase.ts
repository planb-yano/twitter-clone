import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFaRZ3Bw_RHCS6mqX4cg0CPL2ct7-G5TQ",
  authDomain: "twitter-clone-f4471.firebaseapp.com",
  projectId: "twitter-clone-f4471",
  storageBucket: "twitter-clone-f4471.appspot.com",
  messagingSenderId: "333461469543",
  appId: "1:333461469543:web:0cda193c9b3df5e99d97c2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
