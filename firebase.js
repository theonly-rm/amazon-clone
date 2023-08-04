import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAkoxzMnCDlNpYjzldJmeCOQu2d5CN106o",
    authDomain: "amzn-clone-rm.firebaseapp.com",
    projectId: "amzn-clone-rm",
    storageBucket: "amzn-clone-rm.appspot.com",
    messagingSenderId: "1087704985078",
    appId: "1:1087704985078:web:afc3dc8e15945d068bebd7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ db, auth }