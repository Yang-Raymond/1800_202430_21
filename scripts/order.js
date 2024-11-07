import {firebaseConfig} from "./firebaseAPI.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const docRef = doc(db, "orders", "order1");
const docSnap = await getDoc(docRef);
const data = docSnap.data();

document.getElementById("crDate").textContent=data.date;
document.getElementById("comments").textContent=data.requestsComments;
document.getElementById("volume").textContent=data.volume;
var button = document.getElementById("button");

var invoice = document.getElementById("invoice");
button.addEventListener("click", function () {
    if (invoice.style.display == "none") {
        invoice.style.display = "block";
    }
    else {
        invoice.style.display = "none";
    }
});
