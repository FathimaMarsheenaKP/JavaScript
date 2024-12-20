function validate(age) {
    if (age >= 18) {
        console.log("Eligible to vote");
    } else {
        throw new Error("Not eligible to vote!");
    }
}

console.log("Program starts");

try {
    validate(15);
} catch(e) {
    console.log(e.message);
}

console.log("Program ends");
