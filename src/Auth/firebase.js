import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
const auth = getAuth();
export { app, auth, createUserWithEmailAndPassword };
