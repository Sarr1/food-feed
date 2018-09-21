import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
    apiKey: "AIzaSyD51onwAywdfLIhQ2ff9VywYzCrkVuZkho",
    authDomain: "food-feed-5168b.firebaseapp.com",
    databaseURL: "https://food-feed-5168b.firebaseio.com",
    projectId: "food-feed-5168b",
    storageBucket: "food-feed-5168b.appspot.com",
    messagingSenderId: "644358152509"
};

const devConfig = {
    apiKey: "AIzaSyD51onwAywdfLIhQ2ff9VywYzCrkVuZkho",
    authDomain: "food-feed-5168b.firebaseapp.com",
    databaseURL: "https://food-feed-5168b.firebaseio.com",
    projectId: "food-feed-5168b",
    storageBucket: "food-feed-5168b.appspot.com",
    messagingSenderId: "644358152509"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
