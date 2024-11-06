var currentUser;               //points to the document of the user who is logged in
function populateUserInfo() {
            firebase.auth().onAuthStateChanged(user => {
                // Check if user is signed in:
                if (user) {

                    //go to the correct user document by referencing to the user uid
                    currentUser = db.collection("stations").doc(user.uid)
                    //get the document for current user.
                    currentUser.get()
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

//call the function to run it 
populateUserInfo();

function editUserInfo() {
    //Enable the form fields
    document.getElementById("cancelEditInfoButton").classList.remove("d-none")
    document.getElementById("saveInfoButton").classList.remove("d-none")
    document.getElementById("editInfoButton").classList.add("d-none")
   
    Inputfields = Array.from(document.getElementsByClassName('changable'));
    Inputfields.forEach(element => {
        element.disabled = false;
    });

 }

 function cancelEditUserInfo() {
    // hide buttons
    document.getElementById("cancelEditInfoButton").classList.add("d-none")
    document.getElementById("saveInfoButton").classList.add("d-none")
    document.getElementById("editInfoButton").classList.remove("d-none")

    populateUserInfo()

    Inputfields = Array.from(document.getElementsByClassName('changable'));
    Inputfields.forEach(element => {
        element.disabled = true;
    });
 }

 function saveUserInfo() {
    //enter code here
    document.getElementById("cancelEditInfoButton").classList.add("d-none")
    document.getElementById("saveInfoButton").classList.add("d-none")
    document.getElementById("editInfoButton").classList.remove("d-none")
    
    //a) get user entered values
    stationUsername = document.getElementById('usernameInput').value;       
    stationBilling = document.getElementById('billingInput').value;    
    stationPhone = document.getElementById('phoneInput').value;       

    //b) update user's document in Firestore
    currentUser.update({
        username: stationUsername,
        billingAddress: stationBilling,
        phone: stationPhone
    })
    .then(() => {
        console.log("Document successfully updated!");
    })
    
    //c) disable edit 
    Inputfields = Array.from(document.getElementsByClassName('changable'));
    Inputfields.forEach(element => {
        element.disabled = true;
    });
}