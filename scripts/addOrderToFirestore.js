import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, doc, collection, getDocs, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { firebaseConfig } from "./firebaseAPI.js";

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

/* fields 

order number
order created date
delivery window (to and from)
fuel types and volumes
comments
special request
invoice number






*/

export async function sendData(form) {
    onAuthStateChanged(auth, async function(user) {
        // Check if user is signed in:
        if (user) {

            let currentUserLoads = await getDocs(collection(db, "stations", user.uid, "loads"));
            //go to the correct user document by referencing to the user uid
            let orderNum = currentUserLoads.size

            let currentUserLoad = doc(db, "stations", user.uid, "loads", orderNum.toString());
           

            // get the document for current user.
            setDoc(currentUserLoad, {
                comments: form.querySelector("#comments").value,
                dateCreated: new Date(),
                deliveryWindowFrom: new Date(form.querySelector("#dateTimeFrom").value),
                deliveryWindowTo: new Date(form.querySelector("#dateTimeTo").value),
                orderNumber: orderNum,
                price: 10000,
                specialRequest: form.querySelector("#specialRequest").checked,
                status: "pending",
                totalVolume: 10000,
                trailerType: form.querySelector("#trailer").value
            })
            
            form.querySelectorAll(".compartment").forEach(function (cur) {

                let currentUserLoadComp = doc(db, "stations", user.uid, "loads", orderNum.toString(), "compartments", cur.querySelector(".compNumber").innerText);
                setDoc(currentUserLoadComp, {
                    fuelType: cur.querySelector(".compFuelType").value,
                    fuelVolume: cur.querySelector(".compVolume").value
                })
            })


        } else {
            // No user is signed in.
            console.log ("No user is signed in");
        }
    });
}

export function getData() {
    return new Promise(function(pass, reject) {
    onAuthStateChanged(auth, async function(user) {
        if (user) { 
            let data = {}
            let rawData = await getDocs(collection(db, "scampData"))

            rawData.forEach(function(doc) {
                console.log(doc.id)
                data[`${doc.id}`] = doc.data()
            })
            pass(data)
        } else {
            reject("failed to fetch data")
        }
        
    })
})}

export function getRestrictions() {
    return new Promise(function(pass, reject) {
        onAuthStateChanged(auth, async function(user) {
            if (user) { 
                let data = {}
                let rawData = await getDocs(collection(db, "stations", user.uid, "restrictions"))

                rawData.forEach(function(doc) {
                    console.log(doc.id)
                    data[`${doc.id}`] = doc.data()
                })
                pass(data)
            
            } else {
                reject("user not authenticated")
            }
            
        })
    })}