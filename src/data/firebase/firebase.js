import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKWAS7m0AxIGEaAmfucGqUN2oLvS4LQR0",
  authDomain: "keep-clone-41ce2.firebaseapp.com",
  projectId: "keep-clone-41ce2",
  storageBucket: "keep-clone-41ce2.appspot.com",
  messagingSenderId: "1047169199051",
  appId: "1:1047169199051:web:15ffd41462215a8a68a44e",
};

firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();
//referncia completa
export const storageRef = storage.ref();
//firestore
export const db = getFirestore();
