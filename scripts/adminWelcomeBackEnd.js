import { firebaseConfig } from "./firebaseAPI.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Gets order template
const orderTemplate = document.getElementById("orderTemplate");
const orderContainer = document.getElementById("orderContainer");
const productTemplate = document.getElementById("productTemplate");

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Enters the collection called stations
const mainCollection = await getDocs(collection(db, "stations"));

// Gets all the stations
mainCollection.forEach(async (station) => {

    const stationFields = await doc(db, "stations", station.id);
    const stationFieldsSnap = await getDoc(stationFields);
    const company = stationFieldsSnap.data().company;
    const stationNum = stationFieldsSnap.data().station;
    const stationAddress = stationFieldsSnap.data().location;
    const phoneNumber = stationFieldsSnap.data().phone;

    // For each station, get loads
    const loads = await getDocs(collection(db, "stations", station.id, "loads"));

    // For each load display load template for load information
    loads.forEach(async (load) => {
        if (load.data().status == "pending") {
            const clone = orderTemplate.content.cloneNode(true);
            const invoiceNums = clone.querySelectorAll(".invoiceNum");
            const expectedArrival = clone.querySelector("#expArr");
            const invoice = clone.querySelector("#invoice");
            const store = clone.querySelector("#store");
            const address = clone.querySelector("#stationAddy");
            const phoneNum = clone.querySelector("#phoneNumber");
            const createDate = clone.querySelector("#createDate");
            const products = await getDocs(collection(db, "stations", station.id, "loads", load.id, "compartments"));
            const productContainer = clone.querySelector("#productContainer");
            const subtotal = clone.querySelector("#subTotal");
            const tax = clone.querySelector("#tax");
            const total = clone.querySelector("#total");
            const comments = clone.querySelector("#comments");
            let subTotal = 0;

            // Gets product in each compartment and display in product template
            products.forEach((product) => {
                const cloneProduct = productTemplate.content.cloneNode(true);
                const compartment = cloneProduct.querySelector("#compartment");
                const fuelType = cloneProduct.querySelector("#fuelType");
                const volume = cloneProduct.querySelector("#volume");
                const unitPrice = cloneProduct.querySelector("#unitPrice");
                const totalPrice = cloneProduct.querySelector("#totalPrice");
                compartment.innerText = product.id;
                fuelType.innerText = product.data().fuelType;
                volume.innerText = product.data().fuelVolume;
                totalPrice.innerText = (1.42 * Number(product.data().fuelVolume)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                subTotal += 1.42 * Number(product.data().fuelVolume);
                productContainer.appendChild(cloneProduct);

            });
            createDate.innerText = convertTimestamp(load.data().dateCreated);
            phoneNum.innerText = phoneNumber;
            address.innerText = stationAddress;
            store.innerText = company + stationNum;
            invoiceNums.innerText = load.id;
            expectedArrival.innerText = convertTimestamp(load.data().deliveryWindowTo);
            subtotal.innerText = subTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            tax.innerText = (subTotal * 0.12).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            total.innerText = (subTotal * 1.12).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            comments.innerText = load.data().comments;

            // if order button is clicked, it toggle details for orders
            clone.querySelector("button").onclick = () => {
                if (invoice.style.display == "none") {
                    invoice.style.display = "block";
                } else {
                    invoice.style.display = "none";
                }
            }
            invoiceNums.forEach((invoiceNum) => {
                invoiceNum.innerText = load.id;
            });

            clone.querySelector("#rejectBtn").onclick = () => {
                const updateStatus = async () => {
                    const statusRef = doc(db, "stations", station.id, "loads", load.id);
                    await updateDoc(statusRef, {
                        status: "rejected",
                    });
                }
                updateStatus();
                invoice.style.display = "none";
            }

            clone.querySelector("#approveBtn").onclick = () => {
                const updateStatus = async () => {
                    const statusRef = doc(db, "stations", station.id, "loads", load.id);
                    await updateDoc(statusRef, {
                        status: "approved"
                    });
                }
                updateStatus();
                invoice.style.display = "none";
            }
            orderContainer.appendChild(clone);
        }
    });
});

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


