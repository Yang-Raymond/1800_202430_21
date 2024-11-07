// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { firebaseConfig } from "./firebaseAPI.js";
import {identifyAccType} from "./verification.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//authentication
const auth = getAuth(app);
let email;
let password;
let loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function (event) {
    event.preventDefault();
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    //authenticates 
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            identifyAccType(user.uid);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
});