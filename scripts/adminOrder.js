import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { firebaseConfig } from "./firebaseAPI.js";
import { getFirestore, collection, getDocs, doc, getDoc, updateDoc, setDoc, query, where } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

//Initalize Firebase authentication and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const orderTemplate = document.getElementById("orderTemplate");
const orderContainer = document.getElementById("ordersContainer");

//Logout user if logout button is clicked
document.getElementById("logoutBtn").addEventListener("click", () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        window.location.href = "./login.html";
    }).catch((error) => {
        console.log(error);
    })
});

// If one of these filter buttons are clicked, the orders section  
getOrders("pending");
document.getElementById("pending").addEventListener("click", () => {
    document.getElementById("pendingBorder").style.borderBottom = "solid";
    document.getElementById("pendingBorder").style.borderBottomColor = "#106EFD";
    document.getElementById("dispatchBorder").style.borderBottom = "none";
    document.getElementById("completedBorder").style.borderBottom = "none";
    document.getElementById("approvedBorder").style.borderBottom = "none";
    getOrders("pending");
});
document.getElementById("approve").addEventListener("click", () => {
    document.getElementById("approvedBorder").style.borderBottom = "solid";
    document.getElementById("approvedBorder").style.borderBottomColor = "#106EFD";
    document.getElementById("dispatchBorder").style.borderBottom = "none";
    document.getElementById("completedBorder").style.borderBottom = "none";
    document.getElementById("pendingBorder").style.borderBottom = "none";
    getOrders("approved");
});
document.getElementById("dispatch").addEventListener("click", () => {
    document.getElementById("dispatchBorder").style.borderBottom = "solid";
    document.getElementById("dispatchBorder").style.borderBottomColor = "#106EFD";
    document.getElementById("pendingBorder").style.borderBottom = "none";
    document.getElementById("completedBorder").style.borderBottom = "none";
    document.getElementById("approvedBorder").style.borderBottom = "none";
    document.getElementById("rejectedBorder").style.borderBottom = "none";
    getOrders("dispatched");
});
document.getElementById("completed").addEventListener("click", () => {
    document.getElementById("completedBorder").style.borderBottom = "solid";
    document.getElementById("completedBorder").style.borderBottomColor = "#106EFD";
    document.getElementById("pendingBorder").style.borderBottom = "none";
    document.getElementById("dispatchBorder").style.borderBottom = "none";
    document.getElementById("approvedBorder").style.borderBottom = "none";
    document.getElementById("rejectedBorder").style.borderBottom = "none";
    getOrders("completed");
});
document.getElementById("rejected").addEventListener("click", () => {
    document.getElementById("rejectedBorder").style.borderBottom = "solid";
    document.getElementById("rejectedBorder").style.borderBottomColor = "#106EFD";
    document.getElementById("pendingBorder").style.borderBottom = "none";
    document.getElementById("dispatchBorder").style.borderBottom = "none";
    document.getElementById("approvedBorder").style.borderBottom = "none";
    document.getElementById("completedBorder").style.borderBottom = "none";
    getOrders("rejected");
});

// Grabs all orders from each station and displays it
async function getOrders(filter){
    orderContainer.innerHTML = "";
    const mainCollection = await getDocs(collection(db, "stations"));
    mainCollection.forEach(async (station) => {

        const stationFields = await doc(db, "stations", station.id);
        const stationFieldsSnap = await getDoc(stationFields);
        const brand = stationFieldsSnap.data().brand;
        const number = stationFieldsSnap.data().number;
        const address = stationFieldsSnap.data().address;
        const phone = stationFieldsSnap.data().phone;

        const loads = await getDocs(collection(db, "stations", station.id, "loads"));
        loads.forEach(async (load) => {
            if (load.data().status == filter) {
                const clone = orderTemplate.content.cloneNode(true);
                clone.querySelector("#station").innerText = brand + " #" + number;
                clone.querySelector("#invoiceNum").innerText = station.id + load.id;
                clone.querySelector("#stationAddress").innerText = address;
                clone.querySelector("#ETA").innerText = convertTimestamp(load.data().deliveryWindowFrom) + " - " + convertTimestamp(load.data().deliveryWindowTo);
                clone.querySelector("#price").innerText = load.data().price;
                clone.querySelector("#"+filter+"Badge").style.display="block";
                orderContainer.appendChild(clone);
            }
        });
    });
}

// Converts Firebase timestamp to mm/dd/yyyy
// https://gist.github.com/christoph-codes/bf7b6ce4dd5b10e3cf4ba59b571dfdc4
function convertTimestamp(timestamp) {
    let date = timestamp.toDate();
    let mm = date.getMonth();
    let dd = date.getDate();
    let yyyy = date.getFullYear();

    date = mm + '/' + dd + '/' + yyyy;
    return date;
}
