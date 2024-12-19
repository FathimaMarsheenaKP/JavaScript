function display(data) {
    console.log("Data: " + data);  
}

function addition(a, b, show) {
    res = a + b;
    show(res);
}
addition(10, 20, display);

function accept_name(name, show) {
    show(name);
}
accept_name("Keerthi", display);