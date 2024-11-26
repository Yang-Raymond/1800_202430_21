import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { firebaseConfig } from "./firebaseAPI.js";
import { getFirestore, collection, getDocs, doc, getDoc, updateDoc, setDoc, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const orderTemplate = document.getElementById("orderTemplate");
const orderContainer = document.getElementById("ordersContainer");
const productTemplate = document.getElementById("productTemplate");
const productContainer = document.getElementById("productContainer");
let onTop = document.getElementsByClassName("ontop");

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
    document.getElementById("rejectedBorder").style.borderBottom = "none";
    getOrders("pending");
});
document.getElementById("approve").addEventListener("click", () => {
    document.getElementById("approvedBorder").style.borderBottom = "solid";
    document.getElementById("approvedBorder").style.borderBottomColor = "#106EFD";
    document.getElementById("dispatchBorder").style.borderBottom = "none";
    document.getElementById("completedBorder").style.borderBottom = "none";
    document.getElementById("pendingBorder").style.borderBottom = "none";
    document.getElementById("rejectedBorder").style.borderBottom = "none";
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
async function getOrders(filter) {
    orderContainer.innerHTML = "";
    const mainCollection = await getDocs(collection(db, "stations"));
    mainCollection.forEach(async (station) => {
        const stationFields = await doc(db, "stations", station.id);
        const stationFieldsSnap = await getDoc(stationFields);
        const brand = stationFieldsSnap.data().brand;
        const number = stationFieldsSnap.data().number;
        const address = stationFieldsSnap.data().address;
        const phone = stationFieldsSnap.data().phone;
        const q = query(collection(db, "stations", station.id, "loads"));
        onSnapshot(q, (querySnapshot) => {
            orderContainer.innerHTML = "";
            querySnapshot.forEach(async (load) => {
                if (load.data().status == filter) {
                    const clone = orderTemplate.content.cloneNode(true);
                    const dropdown = clone.querySelector("#dropdown");
                    let subtotal = 0;
                    clone.querySelector("#station").innerText = brand + " #" + number;
                    clone.querySelector("#invoiceNum").innerText = station.id + load.id;
                    clone.querySelector("#stationAddress").innerText = address;
                    clone.querySelector("#ETA").innerText = convertTimestamp(load.data().deliveryWindowFrom) + " - " + convertTimestamp(load.data().deliveryWindowTo);
                    clone.querySelector("#price").innerText = load.data().price;
                    clone.querySelector("#" + filter + "Badge").style.display = "block";
                    const products = await getDocs(collection(db, "stations", station.id, "loads", load.id, "compartments"));
                    dropdown.addEventListener("click", () => {
                        productContainer.innerHTML = "";

                        //Gets each product in an order and displays it
                        products.forEach((product) => {
                            const cloneProduct = productTemplate.content.cloneNode(true);
                            cloneProduct.querySelector("#compartmentNum").innerText = product.id;
                            cloneProduct.querySelector("#product").innerText = product.data().fuelType;
                            cloneProduct.querySelector("#quantity").innerText = product.data().fuelVolume;
                            cloneProduct.querySelector("#unitPrice").innerText = "$1.42";
                            cloneProduct.querySelector("#totalAmount").innerText = (1.42 * Number(product.data().fuelVolume)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                            subtotal += 1.42 * Number(product.data().fuelVolume);
                            productContainer.appendChild(cloneProduct);
                        });
                        const orderNum = document.querySelectorAll(".orderNum");
                        onTop[0].style.display = "block";
                        document.getElementById("overlay").style.display = "block";
                        document.getElementById("brand").innerText = station.data().brand;
                        document.getElementById("number").innerText = station.data().number;
                        document.getElementById("address").innerText = station.data().address;
                        document.getElementById("phone").innerText = station.data().phone;
                        document.getElementById("creationDate").innerText = convertTimestamp(load.data().dateCreated);
                        document.getElementById("actionBtn").style.display = "none";
                        document.getElementById("productPendingBadge").style.display = "none";
                        document.getElementById("productApprovedBadge").style.display = "none";
                        document.getElementById("productRejectedBadge").style.display = "none";
                        document.getElementById("productDispatchedBadge").style.display = "none";
                        document.getElementById("productCompletedBadge").style.display = "none";
                        document.getElementById("comments").innerText = load.data().comments;
                        document.getElementById("subtotal").innerText = subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                        document.getElementById("tax").innerText = (subtotal * 0.12).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                        document.getElementById("total").innerText = (subtotal * 1.12).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

                        //Updates order status if button is pressed
                        document.getElementById("rejectBtn").addEventListener("click", async () => {
                            const statusRef = doc(db, "stations", station.id, "loads", load.id);
                            await updateDoc(statusRef, {
                                status: "rejected",
                            });
                        });
                        document.getElementById("approveBtn").addEventListener("click", async () => {
                            const statusRef = doc(db, "stations", station.id, "loads", load.id);
                            await updateDoc(statusRef, {
                                status: "approved",
                            });
                        });
                        if (load.data().status == "pending") {
                            document.getElementById("productPendingBadge").style.display = "inline-flex";
                            document.getElementById("actionBtn").style.display = "block";
                        } else if (load.data().status == "approved") {
                            document.getElementById("productApprovedBadge").style.display = "inline-flex";
                        } else if (load.data().status == "rejected") {
                            document.getElementById("productRejectedBadge").style.display = "inline-flex";
                        } else if (load.data().status == "dispatched") {
                            document.getElementById("productDispatchedBadge").style.display = "inline-flex";
                        } else {
                            document.getElementById("productCompletedBadge").style.display = "inline-flex";
                        }
                        orderNum.forEach((order) => {
                            order.innerText = station.id + load.id;
                        });
                    });
                    orderContainer.appendChild(clone);
                }
            });
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

document.getElementById("closeBtn").addEventListener("click", () => {
    onTop[0].style.display = "none";
    document.getElementById("overlay").style.display = "none"
});