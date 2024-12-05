/* Handles the interactivity and visuals of the create load/order page. */
import { sendData, getData, getRestrictions } from "./createOrderFirestore.js";
import { addCalendar } from "./calendar.js";

/* Grabs the restrictions and data. */
const data = await getData()
const restrictions = await getRestrictions()

/* Initializes the to calendars. */
let fromCalendar = await addCalendar(document.querySelector("#dateTimeFrom"));
let toCalendar = await addCalendar(document.querySelector("#dateTimeTo"));

/* Sets up the fields */
async function setUpFields(){

    //Sets up the trailer selector with the data from getData()
    let trailerSelector = document.getElementById("trailer")

    for (let key of Object.keys(data["trailerTypes"]).sort()) {

        let trailerOption = document.createElement("option")
        trailerOption.setAttribute("value", key);
        trailerOption.innerText = key;

        // Disable restricted trailers
        console.log(restrictions["trailer"])
        if (Object.values(restrictions["trailer"]).includes(key)) {
            trailerOption.disabled = true;
            trailerOption.classList.add("specialRequestDisabled");
        }

        trailerSelector.appendChild(trailerOption)
    }

    trailerSelector.addEventListener("input", function() {updateLoadingPattern(this)})


    // Sets up the fuel selector template with date from getData()
    let fuelSelector = document.querySelector("#compTemplate").content.querySelector(".compFuelType")

    for (let key of Object.keys(data["fuelTypes"]).sort()) {
        let fuelOption = document.createElement("option");
        fuelOption.setAttribute("value", key)
        fuelOption.innerHTML = key;

        //Disable restricted fuels
        if (Object.values(restrictions["fuel"]).includes(key)) {
            fuelOption.disabled = true;
            fuelOption.classList.add("specialRequestDisabled");
        }

        fuelSelector.appendChild(fuelOption)
    }

    //Set up delivery window to/from
    let today = new Date()
    today.setDate(today.getDate() + 1)

    //add station restrictions to each calendar
    fromCalendar.updateRestrictions(Object.values(restrictions["time"]))
    //toCalendar.updateRestrictions(Object.values(restrictions["time"]))

    //set the minimum date to 24 hours in the future and set the delivery window to 6 hours
    fromCalendar.setMin(today)
    fromCalendar.setPeriod(6)
 
    //Disable to calendar (for later)
    toCalendar.active(false)

    //Enable the to calendar if the from calendar has a valid date selected
    fromCalendar.onChange(function(date) {
        if (new Date(date).valueOf()) {
            toCalendar.active(true)

            //Set the minimum date selectable to 6 hours after the time selected
            let min = new Date(new Date(date).setHours(new Date(date).getHours() + 6))    
            toCalendar.setMin(min)

            //Set the macimum date selecatable to the closest restriction
            let max = (fromCalendar.findNearestRestriction(min))
            if (max instanceof Date) {
                toCalendar.setMax(max)
            }
            
        } else {
            toCalendar.active(false)
        }
    })


    let specialRequest = document.querySelector("#specialRequest")
    specialRequest.addEventListener("change", function() {
        handleSpecialRequest(this)
    })

    //Enable all froms now that data has loaded in
    document.querySelector("#order-form")
    fromCalendar.active(true)
    trailerSelector.disabled = false;
    document.querySelector("#comments").disabled = false;
    specialRequest.disabled = false;
}

setUpFields()

//Handles dynamically loading in compartmnets based on the size of trailer selected
function updateLoadingPattern(element) {
    let loadingDiv = document.getElementById("compartments")
    loadingDiv.innerHTML = ""
    let compartment = document.getElementById("compTemplate")
    console.log(element.value, "\n", loadingDiv)
    for (let i = 1; i <= +data["trailerTypes"][element.value]["compartments"]; i++) {
        let currentCompartment = compartment.content.cloneNode(true);
        currentCompartment.querySelector(".volume").innerHTML = data["trailerTypes"][element.value]["volumes"][i - 1]
        currentCompartment.querySelector(".compNumber").innerHTML = i;
        currentCompartment.querySelector(".compFuelType").addEventListener("input", function() {updateCompartment(this)})
        loadingDiv.appendChild(currentCompartment);
    }
}

//Handles dynamically colouring compartments based on the fuel selected
function updateCompartment(element) {

    let optionStyle
    
    if (data["fuelTypes"][element.value]["marked"]) {
        optionStyle = `background: linear-gradient(${data["fuelTypes"][element.value]["colour"]} 24%, #00ff00 25%, #00ff00 75%, ${data["fuelTypes"][element.value]["colour"]} 76%);`
    } else {
        optionStyle = `background: ${data["fuelTypes"][element.value]["colour"]};`
    }

    console.log(element)
    let fuelText = element.parentNode.nextElementSibling;
    fuelText.innerHTML = `<span>${element.value}</span>`
    fuelText.setAttribute("style", optionStyle)
}

//Sets up the submit button and input validation
document.getElementById("orderFormSubmit").addEventListener("click", async function() {
    
    console.log(document.querySelector("input:invalid, select:has(option:checked:disabled)") == null 
    , fromCalendar.getValue() != null , toCalendar.getValue() != null)
    if (document.querySelector("input:invalid, select:has(option:checked:disabled)") == null 
    && fromCalendar.getValue() != null && toCalendar.getValue() != null) {
        document.querySelector("#resultModal .modal-title").innerHTML = "Success!"
        document.querySelector("#resultModal .modal-body p").innerHTML = "Order was successfully created"
        await sendData(document.querySelector("#order-form"))
        resetForm()
        
        
    } else {
        document.querySelector("#resultModal .modal-title").innerHTML = "Failure"
        document.querySelector("#resultModal .modal-body p").innerHTML ="Required fields are blank or invalid"
    }

    let resultModal = new bootstrap.Modal(document.getElementById('resultModal'), {keyboard:true})
    resultModal.show()
});


document.getElementById("resetButton").addEventListener("click", function() {
    resetForm()
})

function resetForm() {
    fromCalendar.resetFields()
    toCalendar.resetFields()
    document.querySelector("#trailer").children[0].selected = true;
    document.querySelector("#compartments").innerHTML = "";
    document.querySelector("#specialRequest").checked = false;
    handleSpecialRequest(document.querySelector("#specialRequest"))
    document.querySelector("#comments").value = ""
}

function handleSpecialRequest(checkbox) {
    if (checkbox.checked) {
        document.querySelectorAll(".specialRequestDisabled").forEach(function(cur) {
            cur.disabled = false
        })
    } else {
        document.querySelectorAll(".specialRequestDisabled").forEach(function(cur) {
            cur.disabled = true
        })
    }
}