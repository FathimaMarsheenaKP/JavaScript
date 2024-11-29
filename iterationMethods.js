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
    if (element % 2 == 0) {
        even1.push(element);
    }
});

even1.forEach((element, index) => {
    console.log(index, ':' , element)
});
console.log("\n");

// another method to get even number
let even = arr.filter(element => element % 2 == 0);
console.log(even)