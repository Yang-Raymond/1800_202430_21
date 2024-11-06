import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, updateDoc, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { firebaseConfig } from "./firebaseAPI.js";

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

var currentUser;               //points to the document of the user who is logged in
function populateUserInfo() {
            onAuthStateChanged(auth, user => {
                // Check if user is signed in:
                if (user) {

                    //go to the correct user document by referencing to the user uid
                    currentUser = doc(db, "stations", user.uid);
                    

                    //get the document for current user.
                    getDoc(currentUser)
                        .then(userDoc => {
                            //get the data fields of the user
                            let stationNum = userDoc.data().station;
                            let stationLocation = userDoc.data().location;
                            let stationCompany = userDoc.data().company;
                            let stationPhone = userDoc.data().phone;
                            let stationEmail = userDoc.data().email;
                            let stationUsername = userDoc.data().username;
                            let stationPassword = userDoc.data().password;
                            let stationBilling = userDoc.data().billingAddress;

                            //if the data fields are not empty, then write them in to the form.
                            if (stationNum != null && stationCompany != null) {
                                document.getElementById("stationNumber").innerHTML = stationCompany + stationNum;
                            }
                            if (stationLocation != null) {
                                document.getElementById("stationAddress").innerHTML= stationLocation;
                            }
                            if (stationPhone) {
                                document.getElementById("phoneInput").value = stationPhone;
                            }
                            if (stationEmail) {
                                document.getElementById("emailInput").value = stationEmail;
                            }
                            if (stationUsername) {
                                document.getElementById("usernameInput").value = stationUsername;
                            }
                            if (stationPassword) {
                                document.getElementById("passwordInput").value = stationPassword;
                            }
                            if (stationBilling) {
                                document.getElementById("billingInput").value = stationBilling;
                            }
                        })
                } else {
                    // No user is signed in.
                    console.log ("No user is signed in");
                }
            });
        }

document.getElementById("editInfoButton").addEventListener("click", 
function() {
    //Enable the form fields
    document.getElementById("cancelEditInfoButton").classList.remove("d-none")
    document.getElementById("saveInfoButton").classList.remove("d-none")
    document.getElementById("editInfoButton").classList.add("d-none")
   
    let Inputfields = Array.from(document.getElementsByClassName('changable'));
    Inputfields.forEach(element => {
        element.disabled = false;
    });

 })

 document.getElementById("cancelEditInfoButton").addEventListener("click", 
    function() {
    // hide buttons
    document.getElementById("cancelEditInfoButton").classList.add("d-none")
    document.getElementById("saveInfoButton").classList.add("d-none")
    document.getElementById("editInfoButton").classList.remove("d-none")

    populateUserInfo()

    let Inputfields = Array.from(document.getElementsByClassName('changable'));
    Inputfields.forEach(element => {
        element.disabled = true;
    });
 })

 document.getElementById("saveInfoButton").addEventListener("click", 
    function() {
    //enter code here
    document.getElementById("cancelEditInfoButton").classList.add("d-none")
    document.getElementById("saveInfoButton").classList.add("d-none")
    document.getElementById("editInfoButton").classList.remove("d-none")
    
    //a) get user entered values
    let stationUsername = document.getElementById('usernameInput').value;       
    let stationBilling = document.getElementById('billingInput').value;    
    let stationPhone = document.getElementById('phoneInput').value;       

    //b) update user's document in Firestore
    updateDoc(currentUser, {
        username: stationUsername,
        billingAddress: stationBilling,
        phone: stationPhone
    })
    .then(() => {
        console.log("Document successfully updated!");
    })
    
    //c) disable edit 
    let Inputfields = Array.from(document.getElementsByClassName('changable'));
    Inputfields.forEach(element => {
        element.disabled = true;
    });
})

document.getElementById("logoutButton").addEventListener("click", 
    function() {
        auth.signOut()
        console.log("user signed out")
        window.location.href = "./login.html"

    })

//call the function to run it 
populateUserInfo();
