import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBUwXnINgaPHGXYkAq1ZWU9G1uhtY1kkSE",
  authDomain: "mgmttool-pro.firebaseapp.com",
  databaseURL: "https://mgmttool-pro.firebaseio.com",
  projectId: "mgmttool-pro",
  storageBucket: "mgmttool-pro.appspot.com",
  messagingSenderId: "550197543447",
  appId: "1:550197543447:web:8237df73139666ac"
};

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});
  export default firebase;
