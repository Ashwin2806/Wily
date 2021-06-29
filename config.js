import * as firebase from 'firebase'
require("@firebase/firestore")
var firebaseConfig = {
  apiKey: "AIzaSyBu9hYmD-DVjeeBL0svNnMSxnPKJD1STGQ",
  authDomain: "wireless-library-125a8.firebaseapp.com",
  projectId: "wireless-library-125a8",
  storageBucket: "wireless-library-125a8.appspot.com",
  messagingSenderId: "625855450285",
  appId: "1:625855450285:web:35905251f5d42b11684a24",
  measurementId: "G-5QJD3SS1KM"
};
// Initialize Firebase
if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()