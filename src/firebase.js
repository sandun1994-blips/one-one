import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyAzJsQIknKoH0B3LL8Ei68FoPBXYuxB1zw",
    authDomain: "facebook-3078b.firebaseapp.com",
    projectId: "facebook-3078b",
    storageBucket: "facebook-3078b.appspot.com",
    messagingSenderId: "172516645568",
    appId: "1:172516645568:web:db1098e28ec900d7026b25"
  }

  const firebaseApp =firebase.initializeApp( firebaseConfig)

  const db =firebaseApp.firestore()

  const storage =firebase.storage()

  const auth =firebase.auth()

  export {db,auth,storage}