import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBQWT1-yi1pQwyMWRqXh4Vqckq06DSpSpA",
  authDomain: "element-lookup.firebaseapp.com",
  projectId: "element-lookup",
  storageBucket: "element-lookup.appspot.com",
  messagingSenderId: "889724331849",
  appId: "1:889724331849:web:0a7286cd9769da8e395c98",
  measurementId: "G-V3GRY2CB0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }