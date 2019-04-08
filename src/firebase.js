import firebase from 'firebase/app';
import 'firebase/app' 
import 'firebase/database' 

const config = {
    apiKey: "AIzaSyDwJ9Ee5uF7LDaCoBnfJ42qRj36q1VUV_c",
    authDomain: "m-city-8ae24.firebaseapp.com",
    databaseURL: "https://m-city-8ae24.firebaseio.com",
    projectId: "m-city-8ae24",
    storageBucket: "m-city-8ae24.appspot.com",
    messagingSenderId: "801580945467"
  };

firebase.initializeApp(config)

const firebaseDB = firebase.database()
const firebaseMatches = firebaseDB.ref('matches')

export {
    firebase,
    firebaseMatches
}