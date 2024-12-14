// hello * 5
for (i = 0; i <= 5; i++) {
    console.log("hello");
}

// multiplication table of 5
console.log("MULTIPLICATION TABLE OF 5");
for (i = 1; i <= 10; i++) {
    console.log("5 x", i ,"=", (5*i));
}

let num = 4
console.log("MULTIPLICATION TABLE OF", num);
let j = 1
while (j <= 10) {
    console.log(num, "x", j ,"=", (num*j));
    j++;
}

// check number palindrome or not
number = 54845
originalNumber = number
reverse = "";
while(number > 0) {
    rem = number % 10;
    reverse = reverse + rem;
    number = Math.floor(number / 10);
}
if (originalNumber == reverse) {
    console.log(originalNumber + " is palindrome");
} else {
    console.log(originalNumber + " is not palindrome");
}

// multiples of 5 from 1 to 100
console.log("multiples of 5 from 1 to 100");
let k = 1
do {
    if (k % 5 === 0) {
        console.log(k);  
    }
    k++;
} while (k <= 100);

// for traversing through array
let fruits = ["apple", "banana", "cherry"];
for (f of fruits) {
    console.log(f); 
}

// objects
let person = {
    name : "Alice",
    age: 25
}
for (key in person) {
    console.log(key + ": " + person[key]);
}

// for each
fruits = ["apple", "banana","cherry"];
fruits.forEach(f => console.log(f));

fruits = ["apple", "banana","cherry"];
fruits.forEach(f => console.log(f + " is a fruit"));