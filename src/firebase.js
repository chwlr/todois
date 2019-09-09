import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDVcD-VZ23e5hGR8KkJt3A7IH8NbtCGhxc",
  authDomain: "todoisapp.firebaseapp.com",
  databaseURL: "https://todoisapp.firebaseio.com",
  projectId: "todoisapp",
  storageBucket: "todoisapp.appspot.com",
  messagingSenderId: "1052563685519",
  appId: "1:1052563685519:web:040186d83f04a50f2070fa"
});

export { firebaseConfig as firebase };
