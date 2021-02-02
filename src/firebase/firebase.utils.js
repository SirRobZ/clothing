import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAefTNNsY2Uw7ORDe0TNTw6QjvpVp28O3Y",
    authDomain: "crown-db-4abcb.firebaseapp.com",
    projectId: "crown-db-4abcb",
    storageBucket: "crown-db-4abcb.appspot.com",
    messagingSenderId: "153032346135",
    appId: "1:153032346135:web:222292aa5e7a3405142a52",
    measurementId: "G-X09T98DN7H"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
