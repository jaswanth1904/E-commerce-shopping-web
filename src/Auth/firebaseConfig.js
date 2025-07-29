import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: "AIzaSyDy1wtLaxhcJoU_rpPOwuDKthWHlM1yo9E",
  authDomain: "e-commerce-31eda.firebaseapp.com",
  projectId: "e-commerce-31eda",
  storageBucket: "e-commerce-31eda.appspot.com", 
  messagingSenderId: "965016039055",
  appId: "1:965016039055:web:392820bff78189ad3b8afa",
  measurementId: "G-JP5Z3DLYL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize Firestore
const db = getFirestore(app);

// Export the initialized services
export { auth, provider, db };