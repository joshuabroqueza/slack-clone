// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase";

// import { initializeApp } from 'firebase/app';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyACwFwd4dWeW5ZpVQTcBCfQy_XE05RaEmQ",
//     authDomain: "slack-clone-356f2.firebaseapp.com",
//     projectId: "slack-clone-356f2",
//     storageBucket: "slack-clone-356f2.appspot.com",
//     messagingSenderId: "794049885115",
//     appId: "1:794049885115:web:45ea1fbb8e93385ebe4a9e",
//     measurementId: "G-GWYHSY0SZ6",
//   };

// const app = initializeApp(firebaseConfig);

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, db, provider };

import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyACwFwd4dWeW5ZpVQTcBCfQy_XE05RaEmQ",
  authDomain: "slack-clone-356f2.firebaseapp.com",
  projectId: "slack-clone-356f2",
  storageBucket: "slack-clone-356f2.appspot.com",
  messagingSenderId: "794049885115",
  appId: "1:794049885115:web:45ea1fbb8e93385ebe4a9e",
  measurementId: "G-GWYHSY0SZ6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
