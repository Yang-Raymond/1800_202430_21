var button = document.getElementById("button");
var invoice = document.getElementById("invoice");

button.addEventListener("click", function () {
    if (invoice.style.display == "none") {
        invoice.style.display = "block";
    }
    else {
        invoice.style.display = "none";
    }
});