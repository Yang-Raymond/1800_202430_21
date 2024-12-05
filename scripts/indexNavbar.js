function loadindexNavbar() {
    fetch("/1800_202430_21/text/indexNavbar.html")
        .then(
            response => {return response.text()}
        )
        .then(
            data => {document.getElementById("indexNavbar-placeholder").innerHTML = data }
        );
};

loadindexNavbar()
console.log("indexNavbar.js loaded")

