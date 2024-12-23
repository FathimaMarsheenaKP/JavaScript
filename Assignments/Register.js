document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    if (!validAll()) {
        return; // Stop form submission if validation fails
    }

    alert("Form submitted!");
    
    us = document.querySelector('#uname').value;
    em = document.querySelector("#email").value;
    pw = document.querySelector("#password").value;

    console.log("Username : " + us);
    console.log("Email : " + em);
    console.log("Password : " + pw);

    // Clear the input fields
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = ""; // Clear the value of each input field
    });
});

function validAll() {
    usname = document.querySelector('#uname').value.trim();
    email = document.querySelector("#email").value.trim();
    password = document.querySelector("#password").value.trim();
    
    usernamePattern = /^[a-zA-Z]{4,}$/;
    emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
    passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/

    if (!usname) {
        alert("Username is required.");
        return false;
    }

    if (!usernamePattern.test(usname)) {
        alert("Please enter a valid username.");
        return false;
    }

    if (!email) {
        alert("Email is required.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!password) {
        alert("Password is required.");
        return false;
    }
    
    if (!passwordPattern.test(password)) {
        alert("Password should contain atleast one capital letter, small letter and symbol.");
        return false;
    }
    return true;
}