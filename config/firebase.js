import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBXI9ka49MdZrEbK135XgCGMgP0WxhlAzg",
  authDomain: "ubantu-c1e20.firebaseapp.com",
  projectId: "ubantu-c1e20",
  storageBucket: "ubantu-c1e20.firebasestorage.app",
  messagingSenderId: "368031711657",
  appId: "1:368031711657:web:68ec674d2489542efd84b8",
  measurementId: "G-24CVKDRTT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }; 