import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDkMsoqE6M0O2J5p2wjdo_PbZQt8l-qSuo",
    authDomain: "net-ninja-marioplan-c7114.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-c7114.firebaseio.com",
    projectId: "net-ninja-marioplan-c7114",
    storageBucket: "net-ninja-marioplan-c7114.appspot.com",
    messagingSenderId: "925743475045",
    appId: "1:925743475045:web:b9f093ef0d810dd1af598c"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;