import firebase from "firebase";

const firebaseConfig = {
      apiKey: "AIzaSyA10rir91D9_j6FpIjwujopObwejFi86Jg",
      authDomain: "linkedin-clone-e7c61.firebaseapp.com",
      projectId: "linkedin-clone-e7c61",
      storageBucket: "linkedin-clone-e7c61.appspot.com",
      messagingSenderId: "955003785205",
      appId: "1:955003785205:web:15e978df7e3008df339abc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
