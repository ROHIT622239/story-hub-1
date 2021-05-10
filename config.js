import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyB-RIwWi0OKntv21hAxpObISV5a4_wDuKs",
  authDomain: "bed-time-stories-355a9.firebaseapp.com",
  projectId: "bed-time-stories-355a9",
  storageBucket: "bed-time-stories-355a9.appspot.com",
  messagingSenderId: "821482181687",
  appId: "1:821482181687:web:1589556a846f14b57d1bb2"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
