import { sendData } from "./addOrderToFirestore.js";
import { addCalendar } from "./calendar.js";

const test = [
    "(b)()()()()(7)"
]

// used to set up the input fields on the create order page
async function setUpFields(){

    let today = new Date()
    today.setDate(today.getDate() + 1)

    let fromCalendar = await addCalendar(document.querySelector("#dateTimeFrom"));
    let toCalendar = await addCalendar(document.querySelector("#dateTimeTo"));

    fromCalendar.updateRestrictions(test)
    toCalendar.updateRestrictions(test)

    fromCalendar.setMin(today)
    fromCalendar.setPeriod(6)
 
    toCalendar.active(false)

    fromCalendar.onChange(function(date) {
        if (new Date(date).valueOf()) {
            let min = new Date(new Date(date).setHours(new Date(date).getHours() + 5))
            toCalendar.active(true)
            toCalendar.setMin(min)
            console.log(toCalendar.findNearestRestriction(min))
            toCalendar.setMax(toCalendar.findNearestRestriction(min))
        } else {
            toCalendar.active(false)
        }
    })


    // document.querySelector("#dateTimeFrom").addEventListener("input", function() {setTimeToAvailibility(this)})

    document.querySelector("#trailer").addEventListener("change", function() {updateLoadingPattern(this)})

    document.querySelector("#order-form")
}

setUpFields()



    
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


document.getElementById("orderFormSubmit").addEventListener("click", function() {
    console.log("order-form")
    console.log(document.querySelector("#order-form"))
    sendData(document.querySelector("#order-form"))
});

async function restrictFormDetails(checked) {
    if (!checked) {
        
        console.log(getRestrictions())
    }
}