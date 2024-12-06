arr = [10, 20, "js", 6.44, true]
console.log(arr);
console.log(typeof arr);


// Average of all elements
arr1 = [10, 23, 31, 44, 56]
console.log("Array is ", arr1);

sum = 0;
for (i = 0; i < arr1.length; i++) {
    sum = sum + arr1[i];
}
console.log("Average is", sum / arr1.length);

//odd & even numbers seperately
odd = []
even = []
x = 0;
y = 0
for (i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 == 0) {
        even[x] = arr1[i]
        x++;
    } else {
        even[y] = arr1[i]
        y++;
    }
}
console.log("Odd elements are:", odd);
console.log("Even elements are:", even);

// Rotate array elements by 1 (clockwise)
temp = arr1[arr1.length - 1];
for (i = arr1.length - 2; i >= 0; i--) {
    arr1[i + 1] = arr1[i]
}
arr1[0] = temp
console.log(arr1);


