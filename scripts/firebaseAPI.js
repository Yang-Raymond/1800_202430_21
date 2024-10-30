import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAGFW_CrXZfw1y9sGP-2YuCVmK_56khhY",
    authDomain: "project-4844261578327423643.firebaseapp.com",
    projectId: "project-4844261578327423643",
    storageBucket: "project-4844261578327423643.firebasestorage.app",
    messagingSenderId: "42482897413",
    appId: "1:42482897413:web:cfdbad8b14a553f27f026c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Gets email and password when button is clicked
var loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', submit);
function submit() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });

    console.log(email, password);
};
