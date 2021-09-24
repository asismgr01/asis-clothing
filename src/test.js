import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; //for database
import { firestore } from "./firebase/firebase.utils";

const fireStore = firebase.firestore();

const user = firestore.collection("users").doc("1kSa285Lr5XRdlk6UCjU");

console.log(user);