// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBTPc4Jdtp5bCRR6Sl2KnBARG88zAb4dco",
  authDomain: "chatting-251e5.firebaseapp.com",
  projectId: "chatting-251e5",
  storageBucket: "chatting-251e5.firebasestorage.app",
  messagingSenderId: "896657317592",
  appId: "1:896657317592:web:456b81e34b290d6a89c1ad"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
