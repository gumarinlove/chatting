// 1. Firebase SDK 가져오기 (CDN 방식)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

// 2. 전달해주신 설정 코드
const firebaseConfig = {
  apiKey: "AIzaSyBTPc4Jdtp5bCRR6Sl2KnBARG88zAb4dco",
  authDomain: "chatting-251e5.firebaseapp.com",
  projectId: "chatting-251e5",
  storageBucket: "chatting-251e5.firebasestorage.app",
  messagingSenderId: "896657317592",
  appId: "1:896657317592:web:456b81e34b290d6a89c1ad"
};

// 3. 앱 초기화 및 내보내기 (다른 파일에서 쓰기 위함)
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
