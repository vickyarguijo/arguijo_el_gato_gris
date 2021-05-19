import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDxltVelnVcjUtPE9PjYMdHFmX3tGCUJWo",
    authDomain: "el-gato-gris.firebaseapp.com",
    projectId: "el-gato-gris",
    storageBucket: "el-gato-gris.appspot.com",
    messagingSenderId: "664694783880",
    appId: "1:664694783880:web:bad6418b1b05ef0769843d"
}

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app)

