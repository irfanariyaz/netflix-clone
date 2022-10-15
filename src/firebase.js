

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBvXL6u_oFsehpUg0bykFpsRB0OTJBLFBg",
    authDomain: "netflix-clone-build-a9cdf.firebaseapp.com",
    databaseURL: "https://netflix-clone-build-a9cdf-default-rtdb.firebaseio.com",
    projectId: "netflix-clone-build-a9cdf",
    storageBucket: "netflix-clone-build-a9cdf.appspot.com",
    messagingSenderId: "371262548449",
    appId: "1:371262548449:web:a388fdd56e6a0998d1caa0"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {auth}
  export  default db