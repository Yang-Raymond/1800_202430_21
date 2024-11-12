import { firebaseConfig } from "./firebaseAPI.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//Get data and send to Firestore
let submitBtn = document.getElementById("btnSubmit");
let requestComments = document.getElementById("requestsComments");
let date = document.getElementById("date");
let t1Amount = document.getElementById("t1Amount");
let t2Amount = document.getElementById("t2Amount");
let t3Amount = document.getElementById("t3Amount");
let t4Amount = document.getElementById("t4Amount");
let t5Amount = document.getElementById("t5Amount");
let t6Amount = document.getElementById("t6Amount");
submitBtn.addEventListener("click", async function () {
    await setDoc(doc(db, "orders", "order1"), {
        volume: +t1Amount.value + +t2Amount.value + +t3Amount.value + +t4Amount.value + +t5Amount.value + +t6Amount.value,
        requestsComments: requestComments.value,
        date: date.value
    });
})

//Reset form

let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function () {
    t1Amount.value = "";
    t2Amount.value = "";
    t3Amount.value = "";
    t4Amount.value = "";
    t5Amount.value = "";
    t6Amount.value = "";
    date.value = "";
    requestComments.value = "";

});



