import { initializeApp } from "firebase/app";
const {
  VITE_DRIVEHUB_apiKey,
  VITE_DRIVEHUB_authDomain,
  VITE_DRIVEHUB_projectId,
  VITE_DRIVEHUB_storageBucket,
  VITE_DRIVEHUB_messagingSenderId,
  VITE_DRIVEHUB_appId,
  VITE_DRIVEHUB_measurementId,
} = import.meta.env;
const firebaseConfig = {
  apiKey: VITE_DRIVEHUB_apiKey,
  authDomain: VITE_DRIVEHUB_authDomain,
  projectId: VITE_DRIVEHUB_projectId,
  storageBucket: VITE_DRIVEHUB_storageBucket,
  messagingSenderId: VITE_DRIVEHUB_messagingSenderId,
  appId: VITE_DRIVEHUB_appId,
  measurementId: VITE_DRIVEHUB_measurementId,
};
const app = initializeApp(firebaseConfig);
export { app, firebaseConfig };
console.log(app, firebaseConfig);
