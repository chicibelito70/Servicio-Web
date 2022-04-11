const { initializeApp } = require('firebase/app');
const { getFirestore } = require("firebase/firestore/lite");
const firebaseConfig = {
  apiKey: "AIzaSyDxTuFxVg_y__rTOo-_X-OMUHnzyZCcpSc",
  authDomain: "services-web-7e99a.firebaseapp.com",
  projectId: "services-web-7e99a",
  storageBucket: "services-web-7e99a.appspot.com",
  messagingSenderId: "995650063320",
  appId: "1:995650063320:web:51c696301f7b35fcaf40ad",
  measurementId: "G-79VE88RK6Q"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

module.exports = db;