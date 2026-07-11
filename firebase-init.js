// 이 파일은 설정 파일이므로 굳이 300줄을 채우지 않고 깔끔하게 유지하는 것이 좋습니다.
// 기존과 동일하게 유지하되, 주석을 보강했습니다.

// 1. Firebase 코어 및 필요한 서비스 모듈 불러오기 (깃허브 호스팅용 CDN 방식)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

// 2. 파이어베이스 프로젝트 설정값 (유저님의 고유 API 키)
const firebaseConfig = {
  apiKey: "AIzaSyBTPc4Jdtp5bCRR6Sl2KnBARG88zAb4dco",
  authDomain: "chatting-251e5.firebaseapp.com",
  projectId: "chatting-251e5",
  storageBucket: "chatting-251e5.firebasestorage.app",
  messagingSenderId: "896657317592",
  appId: "1:896657317592:web:456b81e34b290d6a89c1ad"
};

// 3. 앱 초기화 및 데이터베이스(Firestore) 객체 내보내기
// 다른 HTML 파일들에서 이 db 객체를 가져다 쓰게 됩니다.
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
