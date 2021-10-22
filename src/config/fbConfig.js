import firebase from 'firebase/compat'
import 'firebase/firestore'
import 'firebase/auth'

const fbConfig = {
    apiKey: "AIzaSyDNPiX_gIzdqZl2oSGBl6DbSuUKUwsyNlQ",
    authDomain: "beeweb-26c5b.firebaseapp.com",
    projectId: "beeweb-26c5b",
    storageBucket: "beeweb-26c5b.appspot.com",
    messagingSenderId: "47374255704",
    appId: "1:47374255704:web:47407b474730fd84beac2d"
};

firebase.initializeApp(fbConfig)
firebase.firestore().settings({timestempsInSnapshots: true})

export default firebase

