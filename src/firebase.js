import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCP67_HPdVRa0F0ZV0W7f5LdgdivKCGq-g',
  authDomain: 'insta-clone-cp.firebaseapp.com',
  projectId: 'insta-clone-cp',
  storageBucket: 'insta-clone-cp.appspot.com',
  messagingSenderId: '242043166975',
  appId: '1:242043166975:web:fd9ead7e191e045a05acca',
  measurementId: 'G-1P1B25E6F4',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
