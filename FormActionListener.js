document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    
    em = document.querySelector("#email").value;
    pw = document.querySelector("#password").value;

    alert("Email: " + em);
    alert("Password: " + pw);
});