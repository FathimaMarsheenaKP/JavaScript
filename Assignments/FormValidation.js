document.getElementById("submitBtn").addEventListener("click", function () {
    // Get the email input value
    const emailInput = document.getElementById("emailInput");
    const emailValue = emailInput.value.trim();
    const feedback = document.getElementById("emailFeedback");

    // Regular expression to validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Reset feedback message
    feedback.textContent = "";

    // Check if email is valid
    if (!emailPattern.test(emailValue)) {
        // Add error class and feedback
        emailInput.classList.add("error");
        emailInput.classList.remove("success");
        feedback.textContent = "Invalid email address.";
        feedback.style.color = "red";
    } else {
        // Add success class and feedback
        emailInput.classList.remove("error");
        emailInput.classList.add("success");
        feedback.textContent = "Email is valid!";
        feedback.style.color = "green";
    }
});