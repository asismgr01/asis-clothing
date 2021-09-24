import firebase from "firebase/compat/app";
import "firebase/compat/auth"; //for authentication
import "firebase/compat/firestore"; //for database

const config = {
  apiKey: "AIzaSyCMfndPUvdsdjzDKg_NbLL6fhJEE1z93lA",
  authDomain: "clothing-db-9161d.firebaseapp.com",
  projectId: "clothing-db-9161d",
  storageBucket: "clothing-db-9161d.appspot.com",
  messagingSenderId: "711203128054",
  appId: "1:711203128054:web:23115c894da65fb3bda2d7",
  measurementId: "G-MGWKENZWRL",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user',error.message)
    } 
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
