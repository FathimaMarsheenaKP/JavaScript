function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function calculate(a, b, op) {
    res = op(a, b);
    console.log("Result: " + res);
}

calculate(10, 5, add);
calculate(10, 5, sub);
calculate(10, 5, mul);
calculate(10, 5, div);

// -----------------------------CIRCLE------------------------

const PI = 3.147;

function op_circle(rad, op) {
    res = op(rad);
    console.log("Result is " + res);
}

function area(rad) {
    return PI * rad * rad;
}

function perimeter(rad) {
    return 2 * rad * Math.PI;
}

function diameter(rad) {
    return 2 * rad;
}

op_circle(10, area);
op_circle(10, perimeter);
op_circle(2, diameter);

// map()
numbers = [10, 20, 30, 40, 50];
console.log(numbers);
result = numbers.map(num => (num * 2));
console.log("Using map: " + result);

// filter()
result = numbers.filter(num => (num < 32));
console.log("Using filter: " + result);

// reduce()
result = numbers.reduce((total, num) => total + num, 0);
console.log("Using reduce: " + result);

// forEach()
numbers.forEach(num => {
    console.log(num);
});