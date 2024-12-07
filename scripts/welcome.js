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
                            let stationNum = userDoc.data().username;
                            let stationLocation = userDoc.data().address;

                            //if the data fields are not empty, then write them in to the form.
                            if (stationNum != null) {
                                document.getElementById("stationNumber").innerHTML = stationNum;
                            }
                            if (stationLocation != null) {
                                document.getElementById("stationAddress").innerHTML= stationLocation;
                            }
 
                        })
                } else {
                    // No user is signed in.
                    console.log ("No user is signed in");
                }
            });
        }

//call the function to run it 
populateUserInfo();
