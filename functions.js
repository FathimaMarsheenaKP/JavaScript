// without input without output:
function add() {
    var a = 10;
    var b = 20;
    console.log("Addition is", a + b);
}
add(); // calling the function

// with input and without return:
sub(10, 5) // can call before method declaration
function sub(a, b) {
    console.log("Subtraction is", a - b);
}

// with input with return:
function mul(a, b) {
    return a * b;
}

let result = mul(10, 20);
console.log("Multiplication is", result)


// Difference ways of Declaring Functions:

// 1. Function Declaration:
function greet(name) {
    return "Hello", name;
}
console.log(greet("Akash"))

// 2. Function Expression:
let sum = function(a, b) {
    return a + b;
}

let res = sum(30, 40)
console.log(res)