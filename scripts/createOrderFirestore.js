/* Holds all of the code involving sending/reciving data from the firebase for the create load/order page */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, doc, collection, getDocs, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { firebaseConfig } from "./firebaseAPI.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

/*
 * Handles uploading the form details to firebase
 * 
 * Takes the "#order-form" element and passes it's input fields into the firebase.
 */
export function sendData(form) {

    return new Promise(function(pass) {
    onAuthStateChanged(auth, async function(user) {
        if (user) {

            let currentUserLoads = await getDocs(collection(db, "stations", user.uid, "loads"));
            let orderNum = currentUserLoads.size

            let price = 0;
            let totalVolume = 0;
            
            //Add the compartments first (So I can grab the total price after)
            form.querySelectorAll(".compartment").forEach(function (cur) {

                let currentUserLoadComp = doc(db, "stations", user.uid, "loads", orderNum.toString(), "compartments", cur.querySelector(".compNumber").innerText);
                setDoc(currentUserLoadComp, {
                    fuelType: cur.querySelector(".compFuelType").value,
                    fuelVolume: cur.querySelector(".volume").innerText
                })

                totalVolume += +cur.querySelector(".volume").innerText
                price += cur.querySelector(".volume").innerText * 1.42;
            })         

            let currentUserLoad = doc(db, "stations", user.uid, "loads", orderNum.toString());

            setDoc(currentUserLoad, {
                comments: form.querySelector("#comments").value,
                dateCreated: new Date(),       
                deliveryWindowFrom: new Date(form.querySelector("#dateTimeFrom").value),
                deliveryWindowTo: new Date(form.querySelector("#dateTimeTo").value),
                orderNumber: orderNum,
                price: price,
                specialRequest: form.querySelector("#specialRequest").checked,
                status: "pending",
                totalVolume: totalVolume,
                trailerType: form.querySelector("#trailer").value
            })

            pass()

        } else {
            console.log ("No user is signed in");
        }
    });
    })
}

//Returns a promise which resolves with the Scamp data
export function getData() {
    return new Promise(function(pass, reject) {
    onAuthStateChanged(auth, async function(user) {
        if (user) { 
            let data = {}
            let rawData = await getDocs(collection(db, "scampData"))

            rawData.forEach(function(doc) {
                data[`${doc.id}`] = doc.data()
            })
            pass(data)
        } else {
            reject("failed to fetch data")
        }
        
    })
})}

//Returns a promise which returns the logged in stations restrictions
export function getRestrictions() {
    return new Promise(function(pass, reject) {
        onAuthStateChanged(auth, async function(user) {
            if (user) { 
                let data = {}
                let rawData = await getDocs(collection(db, "stations", user.uid, "restrictions"))

                rawData.forEach(function(doc) {
                    data[`${doc.id}`] = doc.data()
                })
                pass(data)
            
            } else {
                reject("user not authenticated")
            }
            
        })
    })}