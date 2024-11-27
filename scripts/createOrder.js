import { sendData, getData, getRestrictions } from "./addOrderToFirestore.js";
import { addCalendar } from "./calendar.js";

const data = await getData()
const restrictions = await getRestrictions()
let fromCalendar = await addCalendar(document.querySelector("#dateTimeFrom"));
let toCalendar = await addCalendar(document.querySelector("#dateTimeTo"));

console.log(data, restrictions)


// used to set up the input fields on the create order page
async function setUpFields(){

    let trailerSelector = document.getElementById("trailer")

    for (let key of Object.keys(data["trailerTypes"]).sort()) {
        let trailerData = data["trailerTypes"][key]

        let trailerOption = document.createElement("option")
        trailerOption.setAttribute("value", key);
        trailerOption.innerHTML = key;

        if (Object.values(restrictions["trailer"]).includes(key)) {
            trailerOption.disabled = true;
            trailerOption.classList.add("specialRequestDisabled");
        }

        trailerSelector.appendChild(trailerOption)
    }

    trailerSelector.addEventListener("input", function() {updateLoadingPattern(this)})

    let fuelSelector = document.querySelector("#compTemplate").content.querySelector(".compFuelType")

    console.log(fuelSelector)

    for (let key of Object.keys(data["fuelTypes"]).sort()) {
        let fuelOption = document.createElement("option");
        fuelOption.setAttribute("value", key)
        fuelOption.innerHTML = key;

        
        if (Object.values(restrictions["fuel"]).includes(key)) {
            console.log(fuelOption)
            fuelOption.disabled = true;
            fuelOption.classList.add("specialRequestDisabled");
        }

        fuelSelector.appendChild(fuelOption)
    }


    let today = new Date()
    today.setDate(today.getDate() + 1)

    fromCalendar.updateRestrictions(Object.values(restrictions["time"]))
    toCalendar.updateRestrictions(Object.values(restrictions["time"]))

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

    specialRequest = document.querySelector("#specialRequest")

    specialRequest.addEventListener("change", function() {
        handleSpecialRequest(this)
    })

    document.querySelector("#order-form")
    fromCalendar.active(true)
    trailerSelector.disabled = false;
    document.querySelector("#comments").disabled = false;
    specialRequest.disabled = false;
    

}

setUpFields()


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

function updateCompartment(element) {

    let optionStyle
    
    if (data["fuelTypes"][element.value]["marked"]) {
        optionStyle = `background: linear-gradient(${data["fuelTypes"][element.value]["colour"]} 24%, #00ff00 25%, #00ff00 75%, ${data["fuelTypes"][element.value]["colour"]} 76%);`
    } else {
        optionStyle = `background: ${data["fuelTypes"][element.value]["colour"]};`
    }

    console.log(element)
    let fuelText = element.parentNode.nextElementSibling;
    fuelText.innerHTML = element.value
    fuelText.setAttribute("style", optionStyle)
}


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