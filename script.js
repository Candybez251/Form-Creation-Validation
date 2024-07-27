document.addEventListener('DOMcontentLoaded', function() {

const form = document.getElementById('registration-form');
const feebackDiv = document.getElementById('form-feedback');


form.addEventListener('submit', (event) => {
    event.preventDefault();

const username = document.getElementById('username').Value.trim();
const email = document.getElementById('email').Value.trim();
const password = document.getElementById('password').Value.trim();


let isvalid = true;
let messages =[];


if ( username.length < 3) {
    isvalid = false;
    messages.push("username must be atleast 3 characters long.");
}


if (!email.includes('@') || !email.includes('.')) {
    isvalid = false;
    messages.push("Email must include '@' and '.' characters.");
}

if (password.length < 8) {
    isvalid = false;
    messages.push("Password length must be greater than 8.");
}


feebackDiv.style.display = "block";

if (isvalid) {
    feebackDiv.textContent ="Registration successful!";
    feebackDiv.style.color = "#28a745";
} else {
    feebackDiv.innerHTML = messages.join("<br>");
    feebackDiv.style.color = "#dc3545";
}


});


});