import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGYjdw3z9a5kqTBqZXb0fQod1lhDk2zWs",
  authDomain: "tweet-from-space.firebaseapp.com",
  databaseURL: "https://tweet-from-space.firebaseio.com",
  projectId: "tweet-from-space",
  storageBucket: "tweet-from-space.appspot.com",
  messagingSenderId: "259061856802",
  appId: "1:259061856802:web:1a0765729600fa4a9ba87b",
  measurementId: "G-033F0WHB03",
};

firebase.initializeApp(firebaseConfig);

export const providerTwitter = new firebase.auth.TwitterAuthProvider();
export const db = firebase.firestore();
export default firebase;
