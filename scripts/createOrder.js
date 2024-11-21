import { sendData } from "./addOrderToFirestore.js";


// used to set up the input fields on the create order page
function setUpFields(){
//     let date = new Date();
//     //date = new Date("2024-11-13 8:00 am");
//     console.log(date, document.querySelectorAll("input[type='date']"))

//     let datefrom = document.querySelector("#dateFrom")
//     datefrom.addEventListener("change", function() {setTimeFromAvailibility(date, new Date(this.value + "T08:00:00Z"))})
//     datefrom.setAttribute("min", `${formatDate(date)}`)

//     // let dateTo = document.querySelector("#dateTo")
//     // dateto.addEventListener("change", function() {setTimeToAvailibility(date, new Date(this.value + "T08:00:00Z"))})

    document.querySelector("#trailer").addEventListener("change", function() {updateLoadingPattern(this)})


//     // document.querySelector("#specialRequest").addEventListener("click", function() {restrictFormDetails(this.checked)})

//     document.getElementById("order-form").addEventListener("submit", event => {
//         {
//           event.preventDefault()
//           event.stopPropagation()
//         }
//     })
}

setUpFields()

//Used to format dates for setting mins on the date inputs
// function formatDate(date) {
//     let currentDate = new Date(date)
//     currentDate.setDate(date.getDate() + 1);
//     let formattedDate = currentDate.getFullYear() + "-";
//     formattedDate += (currentDate.getMonth() + 1) + "-";
//     formattedDate += (currentDate.getDate());
//     return formattedDate;
// }

// Used to limit times if the next day is chosen in the date input
// function setTimeFromAvailibility(date, dateChosen) {
//     // console.log(date)
//     // console.log(dateChosen)
//     console.log(dateChosen.getUTCDate(), date.getUTCDate())

    
//     document.querySelectorAll(".fromDisabled").forEach(function(cur) {

//         //unselect and undisable option elements
//         cur.querySelectorAll("option:not([value=''])").forEach(function(curOp) {
//             //curOp.selected = false;
//             curOp.disabled = false;
//         })

//         //selector boxed
//         if (dateChosen.valueOf()) {
//             cur.disabled = false;
//         } else {
//             cur.disabled = true;
//             if (cur.nodeName == "SELECT") {
//                 cur.querySelectorAll("option")[0].selected = true;
//             } else {
//                 cur.value = "yyyy-mm-dd"
//             }
//         }
//     })
//     if (dateChosen.valueOf()) {

//         let timeFromOptions = document.querySelectorAll("#timeFrom option")
//         let meridiemFromOptions = document.querySelectorAll("#meridiemFrom option")
//         console.log(timeFromOptions, Math.trunc(date.getHours() / 12) + 1)
//         console.log(meridiemFromOptions[Math.trunc(date.getHours() / 12) + 1])

//         if (date.getDate() + 1 == dateChosen.getDate()) {  

//             timeFromOptions[date.getHours() % 12 + 1].selected = true; 
//             if (date.getHours() >= 12) {
//                 meridiemFromOptions[1].disabled = true; 
//                 meridiemFromOptions[2].selected = true; 
//             }
//             for (let i = 0; i <= date.getHours() % 12; i++) {
//                 timeFromOptions[i].disabled = true;
//             } 

//         } else {
//             timeFromOptions[1].selected = true;
//             meridiemFromOptions[1].selected = true;
//         }

//         if (date.getDate() + 1 == dateChosen.getDate()) {  
            
            

//             for (let i = 0; i <= date.getHours() % 12; i++) {
//                 timeFromOptions[i].disabled = true;
//             } 

//         } else {
//             timeFromOptions[1].selected = true;
//         }
//     }

    
// }

// function setTimeToAvailibility(date, dateChosen) {

// }

// used to update the loading pattern when a trailer type is selected
function updateLoadingPattern(element) {
    let loadingDiv = document.getElementById("compartments")
    loadingDiv.innerHTML = ""
    let compartment = document.getElementById("compTemplate")
    console.log(element.value, "\n", loadingDiv)
    for (let i = 0; i < element.value; i++) {
        let currentCompartment = compartment.content.cloneNode(true);
        currentCompartment.querySelector(".compNumber").innerHTML = element.value - i;
        loadingDiv.appendChild(currentCompartment);
    }
}


// document.getElementById("orderFormSubmit").addEventListener("click", function() {
//     console.log("order-form")
//     console.log(document.querySelector("#order-form"))
//     sendData(document.querySelector("#order-form"))
// });

// async function restrictFormDetails(checked) {
//     if (!checked) {
        
//         console.log(getRestrictions())
//     }
// }