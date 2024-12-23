document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
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