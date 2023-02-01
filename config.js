import firebase from 'firebase';

// add SDK Firebase

const firebaseConfig = {
  apiKey: "AIzaSyCE0cr5QLPusymMHU8rMTqfZUZ786IxIpc",
  authDomain: "class-test-d3e4d.firebaseapp.com",
  projectId: "class-test-d3e4d",
  storageBucket: "class-test-d3e4d.appspot.com",
  messagingSenderId: "352474461129",
  appId: "1:352474461129:web:f85fa8562d38f3a682ae18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();