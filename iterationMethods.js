let arr1 = [10, 20, 30]
arr1.forEach((element, index) => {
    console.log(index, ':' , element)
});
console.log("\n");

arr1.forEach(function(ele, idx){
    console.log(ele, idx)
})
console.log("\n");

// FILTER EVEN ELEMENTS INTO EVEN ARRAY:
let arr = [10, 20, 21, 30, 33];
console.log(arr)
let even1 = []
arr1.forEach((element, index) => {
    if (element % 2 === 0) {
        even1.push(element);
    }
});

even1.forEach((element, index) => {
    console.log(index, ':' , element)
});
console.log("\n");

// another method to get even number
let even = arr.filter(element => element % 2 === 0);
console.log("Even array:", even)

// CREATE ARRAY sq_arr HOLDING SQUARE OF SUM OF ARRAY EACH ELEMENT OF ARR
sq_arr = arr.map(ele => {
    return ele * ele
});
console.log("Squared array:", sq_arr)

// SUM OF ARRAY
sum = arr.reduce((acc, ele) => acc+ele, 0)
console.log("sum is:", sum)

// Product of the array
product = arr.reduce((acc, ele) => acc*ele, 1)
console.log("product is:", product)

// another method
let pro = arr.reduce(function(acc, ele) {
    return acc * ele;
})
console.log(pro)