import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9lmKsRSKMt4_QMZQ5dxuEUihOfPgnZ6I",
  authDomain: "whatsapp-clone-34043.firebaseapp.com",
  projectId: "whatsapp-clone-34043",
  storageBucket: "whatsapp-clone-34043.appspot.com",
  messagingSenderId: "1016124977295",
  appId: "1:1016124977295:web:37bb006e38a20d5f7340fa",
  measurementId: "G-QTJBQPC73F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;