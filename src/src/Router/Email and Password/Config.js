
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC2-whZemEVnE0IIjhk7H9Y_n3e4r-Ahp0",
  authDomain: "reactemaill.firebaseapp.com",
  projectId: "reactemaill",
  storageBucket: "reactemaill.appspot.com",
  messagingSenderId: "1023385262331",
  appId: "1:1023385262331:web:c20c7fedfd0d8fcdcaf85e"
};


const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)