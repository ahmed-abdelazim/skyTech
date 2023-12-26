var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPhone = document.getElementById("phone");
var userMessage = document.getElementById("message");

document.addEventListener("DOMContentLoaded", function () {
    // Function to clear the error message
    function clearErrorMessage(inputElement) {
        inputElement.nextElementSibling.textContent = "";
    }

    // Add event listeners to input fields
    document.getElementById("name").addEventListener("input", function () {
        clearErrorMessage(this);
    });
    document.getElementById("email").addEventListener("input", function () {
        clearErrorMessage(this);
    });
    document.getElementById("phone").addEventListener("input", function () {
        clearErrorMessage(this);
    });
    document.getElementById("message").addEventListener("input", function () {
        clearErrorMessage(this);
    });
    document.getElementById("appointment-form").addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        let isValid = true;

        // Validation for Name
        if (!userName.value.trim()) {
            document.querySelector("#name + .error-message").textContent = "Name is required";
            isValid = false;
        } else {
            document.querySelector("#name + .error-message").textContent = "";
        }

        // Validation for Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        if (!userEmail.value) {
            document.querySelector("#email + .error-message").textContent = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(userEmail.value)) {
            document.querySelector("#email + .error-message").textContent = "Invalid email format";
            isValid = false;
        } else {
            document.querySelector("#email + .error-message").textContent = "";
        }

        // Validation for Phone Number
        const phoneRegex = /^[0-9]{10}$/; // Simple phone regex for 10 digits
        if (!userPhone.value) {
            document.querySelector("#phone + .error-message").textContent = "Phone number is required";
            isValid = false;
        } else if (!phoneRegex.test(userPhone.value)) {
            document.querySelector("#phone + .error-message").textContent = "Invalid phone number";
            isValid = false;
        } else {
            document.querySelector("#phone + .error-message").textContent = "";
        }

        // Validation for Message
        if (!userMessage.value.trim()) {
            document.querySelector("#message + .error-message").textContent = "Message is required";
            isValid = false;
        } else {
            document.querySelector("#message + .error-message").textContent = "";
        }

        // If all fields are valid, submit the form or do something else
        if (isValid) {
            console.log(userName.value)
            console.log(userEmail.value)
            console.log(userPhone.value)
            console.log(userMessage.value)
            console.log("Form is valid. Submitting...");
            // You can submit the form here
        }
    });
});

