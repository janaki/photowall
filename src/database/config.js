import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCmR7lDAZy5USS1_O6cJrB5RqD-wtyx-V4",
    authDomain: "photowall-e5aaf.firebaseapp.com",
    databaseURL: "https://photowall-e5aaf.firebaseio.com",
    projectId: "photowall-e5aaf",
    storageBucket: "photowall-e5aaf.appspot.com",
    messagingSenderId: "170261208901"
  }
  firebase.initializeApp(config)
  const database = firebase.database()
  export {database}
