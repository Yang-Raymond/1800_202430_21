//Opens the create station form if create station button is clicked.
//If another windows is open, that window is closed.
document.getElementById("createStationBtn").addEventListener("click", () => {
    document.getElementById("createStation").style.display = "block";
    if (document.getElementById("editStation").style.display == "block") {
        document.getElementById("editStation").style.display = "none";
    }
});

//Opens the edit station form if edit station button is clicked.
//If another windows is open, that window is closed.
document.getElementById("editStationBtn").addEventListener("click", () => {
    document.getElementById("editStation").style.display = "block";
    if (document.getElementById("createStation").style.display == "block") {
        document.getElementById("createStation").style.display = "none";
    }
});

//close the create station window if x is clicked
let close = document.getElementsByClassName("close");
close[0].addEventListener("click", () => {
    document.getElementById("createStation").style.display = "none";
});

//close the edit station window if x is clicked
close[1].addEventListener("click", () => {
    document.getElementById("editStation").style.display = "none";
});

