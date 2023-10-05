import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";





// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4hpdBhdOgfisqARCtb7bz4NdDfdwkypY",
  authDomain: "e-commerce-d64cd.firebaseapp.com",
  projectId: "e-commerce-d64cd",
  storageBucket: "e-commerce-d64cd.appspot.com",
  messagingSenderId: "757304462985",
  appId: "1:757304462985:web:87572448a84b34f92b4058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)

export { fireDB, auth }