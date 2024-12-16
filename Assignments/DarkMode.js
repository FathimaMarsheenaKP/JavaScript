function goDark() {
    body = document.querySelector('body');
    button = document.querySelector("#btn");

    if (body.style.backgroundColor == "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        button.innerText = "ACTIVATE DARK MODE";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "Orange";
        button.innerText = "ACTIVATE LIGHT MODE";
    }
}