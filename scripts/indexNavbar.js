function loadindexNavbar() {
    fetch("/text/indexNavbar.html")
        .then(
            response => {return response.text()}
        )
        .then(
            data => {document.getElementById("indexNavbar-placeholder").innerHTML = data }
        );

};

loadindexNavbar()
console.log("indexNavbar.js loaded")

