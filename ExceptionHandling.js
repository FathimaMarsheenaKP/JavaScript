function add() {
    try {
        a = 10;
        b = 20;
        c = a + b;
        console.log("sum is " + sum);
    } catch (e) {
        console.log(e.message);
        console.log("Exception Handled");
    } finally {
        console.log("Function executed");    
    }
}

console.log("Program starts");
add();
console.log("Program ends");
