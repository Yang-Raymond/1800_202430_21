console.log("createOrder.js loaded")
function setUpFields(){
    let date = new Date();
    console.log(date, document.querySelectorAll("input[type='date']"))

    document.querySelectorAll("input[type='date']").forEach(function(currentElement) {
        currentElement.addEventListener("change", function() {updateTime(this)})
        currentElement.setAttribute("min", `${formatDate(date)}`)
    }
    )

    document.querySelector("#trailer").addEventListener("change", function() {updateLoadingPattern(this)})
}

setUpFields()

function formatDate(date) {
    let currentDate = new Date(date)
    currentDate.setDate(date.getDate() + 1);
    let formattedDate = currentDate.getFullYear() + "-";
    formattedDate += (currentDate.getMonth() + 1) + "-";
    formattedDate += (currentDate.getDate());
    return formattedDate;
}

function updateTime() {
    //add code to prevent selecting times within 24 hours
}

function updateLoadingPattern(element) {
    loadingDiv = document.getElementById("compartments")
    loadingDiv.innerHTML = ""
    compartment = document.getElementById("compTemplate")
    console.log(element.value, "\n", loadingDiv)
    for (let i = 0; i < element.value; i++) {
        let currentCompartment = compartment.content.cloneNode(true);
        currentCompartment.querySelector("#compNumber").innerHTML = element.value - i;
        loadingDiv.appendChild(currentCompartment);
    }
}
