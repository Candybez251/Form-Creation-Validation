document.addEventListener("DOMcontentLoaded", function() {

const form = document.getElementById('registration-form')
const feebackDiv = document.getElementById('form-feedback')


form.addEventListener('submit', (event) => {
    event.preventDefault()

const trimmedusername = document.getElementById('username').Value.trim();
const trimmedemail = document.getElementById('email').Value.trim();
const trimmedpassword = document.getElementById('password').Value.trim();


let isvalid = true;
let messages =[];


if ( trimmedusername.length < 3) {
    isvalid = false;
    messages.push("username must be atleast 3 characters long.");
}


if (!trimmedemail.includes('@') || !trimmedemail.includes('.')) {
    isvalid = false;
    messages.push("Email must include '@' and '.' characters.");
}

if (trimmedpassword.length < 8) {
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