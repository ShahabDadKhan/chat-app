// import firebase from "firebase/app";
// import "firebase/database";

// const config = {
//   //API KEYS
//   apiKey: "AIzaSyC4Mgwkqn5ufxhJYSuL4xKd3AvLWd_9ih4",
//   authDomain: "chat-app-6bc99.firebaseapp.com",
//   projectId: "chat-app-6bc99",
//   storageBucket: "chat-app-6bc99.appspot.com",
//   messagingSenderId: "679041990784",
//   appId: "1:679041990784:web:85715d3ce4e2410ffe6665",
//   measurementId: "G-KF78WZ6S0V",
// };

// const db = firebase.initializeApp(config);
// export default db;
//

import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyC4Mgwkqn5ufxhJYSuL4xKd3AvLWd_9ih4",
  authDomain: "chat-app-6bc99.firebaseapp.com",
  projectId: "chat-app-6bc99",
  storageBucket: "chat-app-6bc99.appspot.com",
  messagingSenderId: "679041990784",
  appId: "1:679041990784:web:85715d3ce4e2410ffe6665",
  measurementId: "G-KF78WZ6S0V",
};

const db = firebase.initializeApp(config);
export default db;
