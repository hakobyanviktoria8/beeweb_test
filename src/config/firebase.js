import firebase from 'firebase/compat'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDNPiX_gIzdqZl2oSGBl6DbSuUKUwsyNlQ",
    authDomain: "beeweb-26c5b.firebaseapp.com",
    projectId: "beeweb-26c5b",
    storageBucket: "beeweb-26c5b.appspot.com",
    messagingSenderId: "47374255704",
    appId: "1:47374255704:web:47407b474730fd84beac2d"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({timestempsInSnapshots: true})

export default firebase

// const firebaseApp = firebase.initializeApp(firebaseConfig)
// export const auth = firebase.auth()
// export const provider = new firebase.auth.GoogleAuthProvider()
