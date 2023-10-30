// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_Wtt2Fm8_D1DFay97esJPA7I95Cpda_Q",
  authDomain: "hazel-mote-361706.firebaseapp.com",
  projectId: "hazel-mote-361706",
  storageBucket: "hazel-mote-361706.appspot.com",
  messagingSenderId: "714621763363",
  appId: "1:714621763363:web:04ec87f03ed45cc35d5696",
  measurementId: "G-6ZQEZX5YVG",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
