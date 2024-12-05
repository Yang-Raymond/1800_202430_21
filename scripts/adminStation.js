import { getAuth, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { firebaseConfig } from "./firebaseAPI.js";
import { getFirestore, collection, doc, getDoc, updateDoc, setDoc, query, onSnapshot, deleteDoc, writeBatch } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const batch = writeBatch(db);
const createStationForm = document.getElementById("createStationForm");
const stationTemplate = document.getElementById("stationTemplate").content;
const stationContainer = document.getElementById("stationContainer");
const disel = document.getElementById("diesel");
const markedDisel = document.getElementById("markedDisel");
const markedPremiesel = document.getElementById("markedPremiesel");
const markedRegEthanol = document.getElementById("markedRegEthanol");
const premEthanol = document.getElementById("premEthanol");
const regEthanol = document.getElementById("regEthanol");
const threeAxle4comp = document.getElementById("3axle4comp");
const threeAxle5comp = document.getElementById("3axle5comp");
const sixAxle5comp = document.getElementById("6axle5comp");
const sevenAxle6comp = document.getElementById("7axle6comp");
const eightAxle5comp = document.getElementById("8axle5comp");
const eightAxle6comp = document.getElementById("8axle6comp");
const cancelBtn = document.getElementsByClassName("cancelBtn");
const dropdownToggle = document.getElementsByClassName("dropdown-toggle");
const dropdownMenu = document.getElementsByClassName("dropdown-menu");
let sidebar = document.getElementsByClassName("sidebar");
let fuel = [false, false, false, false, false, false];
let truck = [false, false, false, false, false, false];

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
            let toYear = document.getElementById("toYear");
            let toMonth = document.getElementById("toMonth");
            let toDay = document.getElementById("toDay");
            let toWeekday = document.getElementById("toWeekday");
            let toHour = document.getElementById("toHour");
            if (toYear.value) {
                toYear = "-" + toYear.value;
            } else {
                toYear = "";
            }
            if (toMonth.value) {
                toMonth = "-" + toMonth.value;
            } else {
                toMonth = "";
            }
            if (toDay.value) {
                toDay = "-" + toDay.value;
            } else {
                toDay = "";
            }
            if (toWeekday.value) {
                toWeekday = "-" + toWeekday.value;
            } else {
                toWeekday = "";
            }
            if (toHour.value) {
                toHour = "-" + toHour.value;
            } else {
                toHour = "";
            }
            if (brandInput.value && stationNumInput.value && stationAddressInput.value && stationPhoneNumInput.value && emailInput.value && passwordInput.value && passwordInput.value == repeatPasswordInput.value && !isNaN(stationNumInput.value)) {

                //Creates station account
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
                await setDoc(doc(db, "stations", userCredential.user.uid), {
                    brand: brandInput.value,
                    email: emailInput.value,
                    address: stationAddressInput.value,
                    phone: stationPhoneNumInput.value,
                    role: "station",
                    number: stationNumInput.value,
                    username: brandInput.value + "#" + stationNumInput.value
                });
                await setDoc(doc(db, "stations", userCredential.user.uid, "restrictions", "time"), {
                    time: "(b)(" + document.getElementById("fromYear").value + toYear + ")(" + document.getElementById("fromMonth").value + toMonth + ")(" + document.getElementById("fromDay").value + toDay + ")(" + document.getElementById("fromWeekday").value + toWeekday + ")(" + document.getElementById("fromHour").value + toHour + ")"
                });
                await setDoc(doc(db, "stations", userCredential.user.uid, "restrictions", "fuel"), {

                });
                await setDoc(doc(db, "stations", userCredential.user.uid, "restrictions", "trailer"), {
                });
                const fuelRef = doc(db, "stations", userCredential.user.uid, "restrictions", "fuel");
                const trailerRef = doc(db, "stations", userCredential.user.uid, "restrictions", "trailer");
                if (fuel[0] == true) {
                    batch.update(fuelRef, { diesel: "Diesel" });
                }
                if (fuel[1] == true) {
                    batch.update(fuelRef, { markedDisel: "Marked Diesel" });
                }
                if (fuel[2] == true) {
                    batch.update(fuelRef, { markedPremiumEthanol: "Marked Premium Ethanol" });
                }
                if (fuel[3] == true) {
                    batch.update(fuelRef, { markedRegularEthanol: "Marked Regular Ethanol" });
                }
                if (fuel[4] == true) {
                    batch.update(fuelRef, { premiumEthanol: "Premium Ethanol" });
                }
                if (fuel[5] == true) {
                    batch.update(fuelRef, { regularEthanol: "Regular Ethanol" });
                }
                if (truck[0]) {
                    batch.update(trailerRef, { 34: "3 Axle 4 Comp" });
                }
                if (truck[1] == true) {
                    batch.update(trailerRef, { 35: "3 Axle 5 Comp" });
                }
                if (truck[2] == true) {
                    batch.update(trailerRef, { 65: "6 Axle 5 Comp" });
                }
                if (truck[3] == true) {
                    batch.update(trailerRef, { 76: "7 Axle 6 Comp" });
                }
                if (truck[4] == true) {
                    batch.update(trailerRef, { 85: "8 Axle 5 Comp" });
                }
                if (truck[5] == true) {
                    batch.update(trailerRef, { 86: "8 Axle 6 Comp" });
                }
                await batch.commit();

                document.getElementById("sucessAlert").style.display = "block";
                document.getElementById("createStationForm").style.display = "none";
                document.getElementById("overlay").style.display = "none";
                document.getElementById("createStationRestrictionForm").style.display = "none";
                setTimeout(() => {
                    brandInput.value = "";
                    stationNumInput.value = "";
                    stationAddressInput.value = "";
                    stationPhoneNumInput.value = "";
                    emailInput.value = "";
                    passwordInput.value = "";
                    repeatPasswordInput.value = "";
                    document.getElementById("sucessAlert").style.display = "none";
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
                    document.getElementById("editStationAccForm").style.display = "none";
                    document.getElementById("overlay").style.display = "none";
                    document.getElementById("updateSucessAlert").style.display = "block";
                    setTimeout(() => {
                        document.getElementById("updateSucessAlert").style.display = "none";
                    }, 1000);
                };

                document.getElementById("deleteBtn").onclick = async () => {
                    await deleteDoc(doc(db, "stations", station.id));
                    document.getElementById("editStationAccForm").style.display = "none";
                    document.getElementById("overlay").style.display = "none";
                    document.getElementById("deleteSucessAlert").style.display = "block";
                    setTimeout(() => {
                        document.getElementById("deleteSucessAlert").style.display = "none";
                    }, 1000);
                }
            }
            stationContainer.appendChild(clone);
        }
    });
});


//If button is clicked -> something happens
document.getElementById("back").onclick = () => {
    document.getElementById("createStationForm").style.display = "block";
    document.getElementById("createStationRestrictionForm").style.display = "none";
}
document.getElementById("nextBtn").onclick = () => {
    document.getElementById("createStationForm").style.display = "none";
    document.getElementById("createStationRestrictionForm").style.display = "block";
}
dropdownToggle[0].onclick = () => {
    if (dropdownMenu[0].style.display == "block") {
        dropdownMenu[0].style.display = "none";
    } else {
        dropdownMenu[0].style.display = "block";
        dropdownMenu[1].style.display = "none";
        dropdownMenu[2].style.display = "none";
        dropdownMenu[3].style.display = "none";
    }
}
dropdownToggle[1].onclick = () => {
    if (dropdownMenu[1].style.display == "block") {
        dropdownMenu[1].style.display = "none";
    } else {
        dropdownMenu[1].style.display = "block";
        dropdownMenu[0].style.display = "none";
        dropdownMenu[2].style.display = "none";
        dropdownMenu[3].style.display = "none";
    }
}
dropdownToggle[2].onclick = () => {
    if (dropdownMenu[2].style.display == "block") {
        dropdownMenu[2].style.display = "none";
    } else {
        dropdownMenu[2].style.display = "block";
        dropdownMenu[0].style.display = "none";
        dropdownMenu[1].style.display = "none";
        dropdownMenu[3].style.display = "none";
    }
}
dropdownToggle[3].onclick = () => {
    if (dropdownMenu[3].style.display == "block") {
        dropdownMenu[3].style.display = "none";
    } else {
        dropdownMenu[3].style.display = "block";
        dropdownMenu[0].style.display = "none";
        dropdownMenu[1].style.display = "none";
        dropdownMenu[2].style.display = "none";
    }
}
disel.onclick = () => {
    if (fuel[0] == true) {
        fuel[0] = false;
        disel.style.backgroundColor = "";
        disel.style.color = "";
    } else {
        disel.style.backgroundColor = "#106EFD";
        disel.style.color = "white";
        fuel[0] = true;
    }
}
markedDisel.onclick = () => {
    if (fuel[1] == true) {
        fuel[1] = false;
        markedDisel.style.backgroundColor = "";
        markedDisel.style.color = "";
    } else {
        markedDisel.style.backgroundColor = "#106EFD";
        markedDisel.style.color = "white";
        fuel[1] = true;
    }
}
markedPremiesel.onclick = () => {
    if (fuel[2] == true) {
        fuel[2] = false;
        markedPremiesel.style.backgroundColor = "";
        markedPremiesel.style.color = "";
    } else {
        markedPremiesel.style.backgroundColor = "#106EFD";
        markedPremiesel.style.color = "white";
        fuel[2] = true;
    }
}
markedRegEthanol.onclick = () => {
    if (fuel[3] == true) {
        fuel[3] = false;
        markedRegEthanol.style.backgroundColor = "";
        markedRegEthanol.style.color = "";
    } else {
        markedRegEthanol.style.backgroundColor = "#106EFD";
        markedRegEthanol.style.color = "white";
        fuel[3] = true;
    }
}
premEthanol.onclick = () => {
    if (fuel[4] == true) {
        fuel[4] = false;
        premEthanol.style.backgroundColor = "";
        premEthanol.style.color = "";
    } else {
        premEthanol.style.backgroundColor = "#106EFD";
        premEthanol.style.color = "white";
        fuel[4] = true;
    }
}
regEthanol.onclick = () => {
    if (fuel[5] == true) {
        fuel[5] = false;
        regEthanol.style.backgroundColor = "";
        regEthanol.style.color = "";
    } else {
        regEthanol.style.backgroundColor = "#106EFD";
        regEthanol.style.color = "white";
        fuel[5] = true;
    }
}
threeAxle4comp.onclick = () => {
    if (truck[0] == true) {
        truck[0] = false;
        threeAxle4comp.style.backgroundColor = "";
        threeAxle4comp.style.color = "";
    } else {
        threeAxle4comp.style.backgroundColor = "#106EFD";
        threeAxle4comp.style.color = "white";
        truck[0] = true;
    }
}
threeAxle5comp.onclick = () => {
    if (truck[1] == true) {
        truck[1] = false;
        threeAxle5comp.style.backgroundColor = "";
        threeAxle5comp.style.color = "";
    } else {
        threeAxle5comp.style.backgroundColor = "#106EFD";
        threeAxle5comp.style.color = "white";
        truck[1] = true;
    }
}
sixAxle5comp.onclick = () => {
    if (truck[2] == true) {
        truck[2] = false;
        sixAxle5comp.style.backgroundColor = "";
        sixAxle5comp.style.color = "";
    } else {
        sixAxle5comp.style.backgroundColor = "#106EFD";
        sixAxle5comp.style.color = "white";
        truck[2] = true;
    }
}
sevenAxle6comp.onclick = () => {
    if (truck[3] == true) {
        truck[3] = false;
        sevenAxle6comp.style.backgroundColor = "";
        sevenAxle6comp.style.color = "";
    } else {
        sevenAxle6comp.style.backgroundColor = "#106EFD";
        sevenAxle6comp.style.color = "white";
        truck[3] = true;
    }
}
eightAxle5comp.onclick = () => {
    if (truck[4] == true) {
        truck[4] = false;
        eightAxle5comp.style.backgroundColor = "";
        eightAxle5comp.style.color = "";
    } else {
        eightAxle5comp.style.backgroundColor = "#106EFD";
        eightAxle5comp.style.color = "white";
        truck[4] = true;
    }
}
eightAxle6comp.onclick = () => {
    if (truck[5] == true) {
        truck[5] = false;
        eightAxle6comp.style.backgroundColor = "";
        eightAxle6comp.style.color = "";
    } else {
        eightAxle6comp.style.backgroundColor = "#106EFD";
        eightAxle6comp.style.color = "white";
        truck[5] = true;
    }
}
