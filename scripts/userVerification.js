import {firebaseConfig} from "./firebaseAPI.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Identifies account type
export async function identifyAccType(accountID) {
    const docRef = doc(db, "stations", accountID);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    if(data.role == "Admin") {
        document.location.href="../pages/adminWelcome.html"
    }
    else {
        document.location.href="../pages/welcome.html";
    }

    
}