import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB5PGwvYTApyJl_Ot-PbXEt6S6zeekwsyY",
    authDomain: "ecommercefirebaseatr.firebaseapp.com",
    projectId: "ecommercefirebaseatr",
    storageBucket: "ecommercefirebaseatr.appspot.com",
    messagingSenderId: "326831850620",
    appId: "1:326831850620:web:810720e4bf1250d92d75f9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;