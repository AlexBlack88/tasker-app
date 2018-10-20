import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCKgmzlkMAH_CPL9ZfSV-ZT7tcQ3hOf5mM",
  authDomain: "tasker-app-43d69.firebaseapp.com",
  databaseURL: "https://tasker-app-43d69.firebaseio.com",
  projectId: "tasker-app-43d69",
  storageBucket: "tasker-app-43d69.appspot.com",
  messagingSenderId: "523638457006"
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
