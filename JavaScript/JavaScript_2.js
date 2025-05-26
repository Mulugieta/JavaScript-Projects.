function validateForm() {
    var name = document.forms["contactForm"]["name"].value.trim();
    var email = document.forms["contactForm"]["email"].value.trim();
    var message = document.forms["contactForm"]["message"].value.trim();
    var errorMsg = document.getElementById("error-msg");

    if (name === "" || email === "" || message === "") {
        errorMsg.textContent = "All fields must be filled out.";
        return false;
    }

    // Simple email format check
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMsg.textContent = "Please enter a valid email address.";
        return false;
    }

    errorMsg.textContent = "";
    alert("Form submitted successfully!");
    return true;
}
