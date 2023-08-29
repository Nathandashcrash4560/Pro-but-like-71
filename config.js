import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBQner5XgieyC1wYWnioTP_2lGOMlkF9xk",
    authDomain: "pro-71-a32ac.firebaseapp.com",
    projectId: "pro-71-a32ac",
    storageBucket: "pro-71-a32ac.appspot.com",
    messagingSenderId: "778250997152",
    appId: "1:778250997152:web:51e35c2c680c580b6168c5"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
