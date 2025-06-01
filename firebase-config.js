// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxo89y-_9g4VilXR3NLmZwJAqanxuAleM",
  authDomain: "iov-logsheet.firebaseapp.com",
  databaseURL: "https://iov-logsheet-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iov-logsheet",
  storageBucket: "iov-logsheet.firebasestorage.app",
  messagingSenderId: "932005439734",
  appId: "1:932005439734:web:b7a0cf98143755260ce4d7",
  measurementId: "G-RYHSPJEFPZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
