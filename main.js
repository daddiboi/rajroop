document.querySelector("#send").addEventListener("submit",function(e){
    e.preventDefault()
    submitProduct()
})

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ5VDMsJOTUg1KkIppG-29i_v7vd0fBDE",
  authDomain: "rajroop-f3463.firebaseapp.com",
  projectId: "rajroop-f3463",
  storageBucket: "rajroop-f3463.appspot.com",
  messagingSenderId: "613722170029",
  appId: "1:613722170029:web:12e36d87069499519cdc24",
  measurementId: "G-QX03R6T46N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



firebase.initializeApp(firebaseConfig);
 
var messagesRef = firebase.database()
    .ref('Collected Data');
 
document.getElementById('contactForm')
    .addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');

    saveMessage(name, email);
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
    });
}


