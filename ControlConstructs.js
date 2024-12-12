marks = 80
if(marks > 70) {
    console.log("Welcome to college");
} else {
    console.log("try other college");
}

// check number is odd or even
number = 5;
if (number > -1) {
    console.log("Number is Positive");
    if (number % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
} else {
    console.log("Number is Negative");
}

// greater between 2 numbers
num1 = 10;
num2 = 6;
if (num1 > num2) {
    console.log(num1, "is greater");
} else {
    console.log(num2, "is greater");
}

// eligible to vote or not (voting age = 18)
age = 21
if (age >= 18) {
    console.log("Eligible for voting");
} else {
    console.log("Not eligible for voting");
}

// print message depending upon scenario: 
/*
    1. age less than 5 years -> baby
    2. age b/w 6-12 years -> child
    3. age b/w 13-19 years -> teen
    4. age above 19 -> adult
*/
if (age <= 5) {
    console.log("Baby");
} else if (age >= 6 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teen");
} else {
    console.log("Adult");
}

// print day of the week
input = 5
if (input === 1) {
    console.log("Sunday");
} else if (input === 2) {
    console.log("Monday");
} else if (input === 3) {
    console.log("Tuesday");
} else if (input === 4) {
    console.log("Wednesday");
} else if (input === 5) {
    console.log("Thursday");
} else if (input === 6) {
    console.log("Friday");
} else if (input === 7) {
    console.log("Saturday");
} else {
    console.log("Invalid input");
}

// same using switch
day = 10
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    
    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    case 4:
        console.log("Wednesday");
        break;

    case 5:
        console.log("Thursday");
        break;

    case 6:
        console.log("Friday");
        break;

    case 7:
        console.log("Saturday");
        break;

    default:
        console.log("Invalid input");
        break;
}

/*
11, 12, 1, 2 - Winter
3, 4, 5, 6 - Summer
7, 8 - Monsoon
9, 10 - Autumn
*/
month = 5
switch (month) {
    case 11:
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;

    case 3:
    case 4:
    case 5:
    case 6:
        console.log("Summer");
        break;

    case 7:
    case 8:
        console.log("Monsoon");
        break;

    case 9:
    case 10:
        console.log("Autumn");
        break;

    default:
        console.log("Invalid input!");
        break;
}