import { sendData } from "./addOrderToFirestore.js";


// used to set up the input fields on the create order page
function setUpFields(){
    let date = new Date();
    console.log(date, document.querySelectorAll("input[type='date']"))

    document.querySelectorAll("input[type='date']").forEach(function(currentElement) {
        currentElement.addEventListener("change", function() {updateTime(this)})
        currentElement.setAttribute("min", `${formatDate(date)}`)
    }
    )

    document.querySelector("#trailer").addEventListener("change", function() {updateLoadingPattern(this)})
    document.getElementById("order-form").addEventListener("submit", event => {
        {
          event.preventDefault()
          event.stopPropagation()
        }
    })
}

setUpFields()

//Used to format dates for setting mins on the date inputs
function formatDate(date) {
    let currentDate = new Date(date)
    currentDate.setDate(date.getDate() + 1);
    let formattedDate = currentDate.getFullYear() + "-";
    formattedDate += (currentDate.getMonth() + 1) + "-";
    formattedDate += (currentDate.getDate());
    return formattedDate;
}

// Used to limit times if the next day is chosen in the date input
function updateTime() {
    //add code to prevent selecting times within 24 hours
}

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

function deliveryWindowValid() {
    let dateFrom = (document.getElementById("dateFrom").value + " " 
    + document.getElementById("timeFrom").value + " "
    + document.getElementById("meridiemFrom").value)
    console.log(dateFrom)

    let dateTo = (document.getElementById("dateTo").value + " " 
    + document.getElementById("timeTo").value + " "
    + document.getElementById("meridiemTo").value)
    console.log(dateTo)
}


function trailerValid() {

}

function compValid() {

}