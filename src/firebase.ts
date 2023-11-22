// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbYv3OvX-fVESo0WNEjbStqJKuCEEcZoc",
  authDomain: "ecom-ac396.firebaseapp.com",
  projectId: "ecom-ac396",
  storageBucket: "ecom-ac396.appspot.com",
  messagingSenderId: "1021880799094",
  appId: "1:1021880799094:web:52d4c67b8c8af88cdd7457",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
