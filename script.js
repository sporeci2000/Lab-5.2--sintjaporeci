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
function checkSavedUsername() {
    const savedUsername = localStorage.getItem("username");

    if (savedUsername) {
        username.value = savedUsername;
    }
}

checkSavedUsername();

// Validate input field
function validateInputElement(input, errorSpan) {
    if (!input.value) {
        errorSpan.textContent = "This field is required";
        return false;
    }

    else if (!input.checkValidity()) {
        errorSpan.textContent = input.validationMessage;
        return false;
    }

    else {
        errorSpan.textContent = "";
        return true;
    }
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



// Validate entire form before submission
function validateForm() {
    let formValid = true;

    const inputFields = [
        [username, unameError],
        [email, emailError],
        [password, passError],
        [cPassword, confirmPasswordError]
    ];

    inputFields.forEach(([input, errorSpan]) => {

        if (!validateInputElement(input, errorSpan)) {
            formValid = false;
        }
    });

    if (!validateConfirmPassword()) {
        formValid = false;
    }

    return formValid;
}


// Real-time validation on inputs
form.addEventListener("input", () => {
    const inputs = [username, email, password, cPassword];

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const errorSpan = document.getElementById(input.id + "Error");
        validateInputElement(input, errorSpan);
    }

    validateConfirmPassword();
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