function loadindexNavbar() {
    fetch("/text/indexNavbar.html")
        .then(
            response => {return response.text()}
        )
        .then(
            data => {document.getElementById("indexNavbar-placeholder").innerHTML = data }
        );

//     console.log(document.getElementById("indexNavbar-placeholder"))
// document.getElementById("indexNavbar-placeholder").innerHTML = `<nav>
//   <ul class="nav nav-underline flex-nowrap bg-primary-subtle nav-justified pt-3 px-2" id="indexNavbar" style="font-size: 1.2rem; padding: 1rem;">
//     <li>
//       <a class="navbar-brand d-flex align-items-center" href="#">
//         <img src="/images/ScampLogo.jpg" height="70" alt="Logo" class="me-2">
//         <span id="text">Scamp Order Portal</span>
//       </a>
//     </li>
//     <li class="nav-item">
//       <a class="d-flex flex-column flex-sm-row align-items-center nav-link p-2" id="index" href="/index.html">
//         <span>Home</span>
//       </a>
//     </li>
//     <li class="nav-item">
//       <a class="d-flex flex-column flex-sm-row align-items-center nav-link p-2" id="about-us" href="/pages/aboutUs.html">
//         <span>About Us</span>
//       </a>
//     </li>
//     <li class="nav-item">
//       <a class="d-flex flex-column flex-sm-row align-items-center nav-link p-2" id="contact-us" href="/pages/contactUs.html">
//         <span>Contact Us</span>
//       </a>
//     </li>
//   </ul>
//   </nav>`
};

loadindexNavbar()
console.log("indexNavbar.js loaded")

