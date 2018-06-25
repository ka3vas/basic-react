import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD9Suq1kAgK40vKfQ5Hi19makxxK2DVv5U",
    authDomain: "catch-of-the-day-sebas.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-sebas.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebase };

// default export
export default base;
