var loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', submit);
function submit() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log(email, password);
}