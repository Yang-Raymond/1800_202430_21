function loadSkeleton() {
    fetch("../text/indexNavbar.html")
        .then(
            response => {return response.text()}
        )
        .then(
            data => {document.getElementById("navbar-placeholder").innerHTML = data }
        );
};

loadSkeleton()
console.log("Skeleton.js loaded")