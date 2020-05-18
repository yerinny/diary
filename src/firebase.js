import * as firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyCroKr6UcZ5Oo8DJv5wa_ZZFfZsXRXPgpc",
    authDomain: "diary-5efca.firebaseapp.com",
    databaseURL: "https://diary-5efca.firebaseio.com",
    projectId: "diary-5efca",
    storageBucket: "diary-5efca.appspot.com",
    messagingSenderId: "393125071892",
    appId: "1:393125071892:web:7bf1a5cc5cc29d345f2b01"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const database = firebase.database().ref('/notes');