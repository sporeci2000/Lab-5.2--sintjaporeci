const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirmPassword");

const unameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const message = document.getElementById("registrationmessage");

// Load saved username on page load
const savedUsername = localStorage.getItem("username");

if (savedUsername) {
    username.value = savedUsername;
}

// Real-time validation for password
function validateConfirmPassword() {
    if (cPassword.value !== password.value) {
        confirmPasswordError.textContent = "Please make sure both passwords are the same.";
        return false;

    }

    else {
        confirmPasswordError.textContent = "";
        return true;
    }
}

// Validate input field
function validateInputElement(input, errorSpan) {
    if (!input.value) {
        errorSpan.textContent = "This field is required";
        return false;
    }
    if (!input.checkValidity()) {
        errorSpan.textContent = input.validationMessage;
        return false;
    }
    errorSpan.textContent = "";
    return true;
}

// Validate entire form before submission
function validateForm() {
    let valid = true;

    if (!validateInputElement(username, unameError)) {
        valid = false;
    }

    if (!validateInputElement(email, emailError)) {
        valid = false;
    }

    if (!validateInputElement(password, passError)) {
        valid = false;
    }

    if (!validateInputElement(cPassword, confirmPasswordError)) {
        valid = false;
    }

    if (!validateConfirmPassword()) {
        valid = false;
    }

    return valid;
}

// Real-time validation on inputs
[username, email, password, cPassword].forEach(input => {

    input.addEventListener("input", () => {

        validateInputElement(input, document.getElementById(input.id + "Error"));

        if (input === password || input === cPassword) {
            validateConfirmPassword();
        }
    });
});

// Form submission
form.addEventListener("submit", e => {

    e.preventDefault();

    if (validateForm()) {

        localStorage.setItem("username", username.value);
        message.style.display = "block";
        form.reset();

    } 
    else {
        message.style.display = "none";
    }
});