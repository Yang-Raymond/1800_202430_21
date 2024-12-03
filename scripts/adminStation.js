import { getAuth, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { firebaseConfig } from "./firebaseAPI.js";
import { getFirestore, collection, doc, getDoc, updateDoc, setDoc, query, onSnapshot } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const createStationForm = document.getElementById("createStationForm");
const stationTemplate = document.getElementById("stationTemplate").content;
const stationContainer = document.getElementById("stationContainer");
const cancelBtn = document.getElementsByClassName("cancelBtn");
const dropdownToggle = document.getElementsByClassName("dropdown-toggle");
const dropdownMenu = document.getElementsByClassName("dropdown-menu");
let sidebar = document.getElementsByClassName("sidebar");

//Checks if user is signed in
onAuthStateChanged(auth, (user) => {
    if (user) {
        //Logout user if logout button is clicked
        document.getElementById("logoutBtn").addEventListener("click", () => {
            const auth = getAuth();
            signOut(auth).then(() => {
                window.location.href = "./login.html";
            }).catch((error) => {
                console.log(error);
            })
        });

        //Display create station form if button is clicked
        document.getElementById("createStationAccBtn").onclick = () => {
            createStationForm.style.display = "block";
            document.getElementById("overlay").style.display = "block";
        };

        //Close create station form or edit station form if button is clicked
        cancelBtn[0].onclick = () => {
            createStationForm.style.display = "none";
            document.getElementById("overlay").style.display = "none";
        };
        cancelBtn[1].onclick = () => {
            document.getElementById("createStationRestrictionForm").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        };
        cancelBtn[2].onclick = () => {
            document.getElementById("editStationAccForm").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        };

        //Account is created when button is clicked
        document.getElementById("createAccBtn").onclick = async () => {
            const brandInput = document.getElementById("brandInput");
            const stationNumInput = document.getElementById("stationNumInput");
            const stationAddressInput = document.getElementById("stationAddressInput");
            const stationPhoneNumInput = document.getElementById("stationPhoneNumInput");
            const emailInput = document.getElementById("emailInput");
            const passwordInput = document.getElementById("passwordInput");
            const repeatPasswordInput = document.getElementById("repeatPasswordInput");
            if (brandInput.value && stationNumInput.value && stationAddressInput.value && stationPhoneNumInput.value && emailInput.value && passwordInput.value && passwordInput.value == repeatPasswordInput.value && !isNaN(stationNumInput.value)) {
                const userCredential = await createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log("Error: " + errorCode + " " + errorMessage);
                        document.getElementById("errorAlert").style.display = "block";
                        if (error.code || error.message) {
                            document.getElementById("errorAlert").innerText = "Error: " + errorCode + " " + errorMessage;
                        }
                        setTimeout(() => {
                            document.getElementById("errorAlert").style.display = "none";
                        }, 1500)
                    });
                setDoc(doc(db, "stations", userCredential.user.uid), {
                    brand: brandInput.value,
                    email: emailInput.value,
                    address: stationAddressInput.value,
                    phone: stationPhoneNumInput.value,
                    role: "station",
                    number: stationNumInput.value,
                    username: brandInput.value + "#" + stationNumInput.value
                });
                document.getElementById("sucessAlert").style.display = "block";
                setTimeout(() => {
                    brandInput.value = "";
                    stationNumInput.value = "";
                    stationAddressInput.value = "";
                    stationPhoneNumInput.value = "";
                    emailInput.value = "";
                    passwordInput.value = "";
                    repeatPasswordInput.value = "";
                    document.getElementById("sucessAlert").style.display = "none";
                    document.getElementById("createStationForm").style.display = "none";
                    document.getElementById("overlay").style.display="none";
                }, 1000);
            } else {
                document.getElementById("errorAlert").style.display = "block";
                setTimeout(() => {
                    document.getElementById("errorAlert").style.display = "none";
                }, 1500)
            }
        }

        //If on desktop, sidebar displays. If on mobile, sidebar hides.
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 768) {
                sidebar[0].style.display = "block";
            }
            else if (window.innerWidth <= 767) {
                sidebar[0].style.display = "none";
            }
        });

        //Display sidebar if menu button is clicked on mobile.
        document.getElementById("menu").addEventListener("click", () => {
            if (sidebar[0].style.display == "block") {
                sidebar[0].style.display = "none";
            } else {
                sidebar[0].style.display = "block";
            }
        });
    } else {
        console.log("User not logged in");
    }
});

//Gets all stations and displays them
const q = query(collection(db, "stations"));
onSnapshot(q, (querySnapshot) => {
    stationContainer.innerHTML = "";
    querySnapshot.forEach(async (station) => {
        if (station.data().role != "Admin") {
            const clone = stationTemplate.cloneNode(true);
            const stationFields = await doc(db, "stations", station.id);
            const stationFieldsSnap = await getDoc(stationFields);
            const brand = stationFieldsSnap.data().brand;
            const number = stationFieldsSnap.data().number;
            const address = stationFieldsSnap.data().address;
            const email = stationFieldsSnap.data().email;
            clone.querySelector("#brand").innerText = brand;
            clone.querySelector("#stationNum").innerText = number;
            clone.querySelector("#email").innerText = email;
            clone.querySelector("#address").innerText = address;
            clone.querySelector("button").onclick = () => {
                document.getElementById("formTitle").innerText = brand + " #" + number;
                document.getElementById("stationID").innerText = station.id;
                document.getElementById("editStationAccForm").style.display = "block";
                document.getElementById("overlay").style.display = "block";
                document.getElementById("brandUpdate").value = brand;
                document.getElementById("stationNumUpdate").value = number;
                document.getElementById("stationAddressUpdate").value = address;
                document.getElementById("stationPhoneNumUpdate").value = stationFieldsSnap.data().phone;
                document.getElementById("emailUpdate").value = email;

                //If update button is clicked, station details will update
                document.getElementById("updateBtn").onclick = async () => {
                    await updateDoc(doc(db, "stations", station.id), {
                        brand: document.getElementById("brandUpdate").value,
                        number: document.getElementById("stationNumUpdate").value,
                        address: document.getElementById("stationAddressUpdate").value,
                        phone: document.getElementById("stationPhoneNumUpdate").value,
                        email: document.getElementById("emailUpdate").value

                    });
                    document.getElementById("updateSucessAlert").style.display = "block";
                    setTimeout(() => {
                        document.getElementById("updateSucessAlert").style.display = "none";
                    }, 1500);
                };
            }
            stationContainer.appendChild(clone);
        }
    });
});

dropdownToggle[0].onclick = () => {
    if (dropdownMenu[0].style.display == "block") {
        dropdownMenu[0].style.display = "none";
    } else {
        dropdownMenu[0].style.display = "block";
    }
}

dropdownToggle[1].onclick = () => {
    if (dropdownMenu[1].style.display == "block") {
        dropdownMenu[1].style.display = "none";
    } else {
        dropdownMenu[1].style.display = "block";
    }
}