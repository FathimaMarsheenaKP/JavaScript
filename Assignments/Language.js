document.querySelector("#java").addEventListener('click', () => {
    const j = document.querySelector("#java");
    j.classList.add('active');

    p = document.querySelector("#python");
    p.classList.remove('active');
    c = document.querySelector("#c");
    c.classList.remove('active');
    g = document.querySelector("#go");
    g.classList.remove('active');
});

document.querySelector("#python").addEventListener('click', () => {
    p = document.querySelector("#python");
    p.classList.add('active');

    j = document.querySelector("#java");
    j.classList.remove('active');
    c = document.querySelector("#cpp");
    c.classList.remove('active');
    g = document.querySelector("#go");
    g.classList.remove('active');
});

function cpp() {
    c = document.querySelector("#cpp");
    c.classList.add('active');

    j = document.querySelector("#java");
    j.classList.remove('active');
    p = document.querySelector("#python");
    p.classList.remove('active');
    g = document.querySelector("#go");
    g.classList.remove('active');
}

function go() {
    g = document.querySelector("#go");
    g.classList.add('active');

    j = document.querySelector("#java");
    j.classList.remove('active');
    p = document.querySelector("#python");
    p.classList.remove('active');
    c = document.querySelector("#cpp");
    c.classList.remove('active');
}