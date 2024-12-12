arr = [40, 50, 10, 20, 30, 70]
console.log("Array is", arr)

// push(): add element at last of the array
console.log("After adding element at end");
arr.push(66)
console.log(arr)
arr.push(17)
console.log(arr)

// unshift(): add element at first of the array
console.log("After adding element at front");
arr.unshift(13)
console.log(arr)
arr.unshift(2)
console.log(arr)

// pop(): remove element from the last
console.log("After removing element from end");
arr.pop()
console.log(arr)
arr.pop()
console.log(arr)

// shift(): remove element from the first
console.log("After removing element from front");
arr.shift()
console.log(arr)
arr.shift()
console.log(arr)

// modify element
console.log("After modification")
arr[2] = 99;
console.log(arr)

// if element is odd change the element to "o" else "e"
brr = [1, 2, 3, 4, 5, 6]
console.log("ARRAY IS", brr);
result = []
for (i = 0; i < brr.length; i++) {
    if (brr[i] % 2 !== 0) {
        result[i] = "o";
    } else {
        result[i] = "e"
    }
}
console.log("RESULT ARRAY IS", result);

// splice(start, how many, item1, item2......)
array = ['Orange', 'Red', 'Blue', 'Pink']
console.log("ARRAY IS", array);
array.splice(1, 1, 'Green')
console.log("After splicing ARRAY IS", array);

// slice(start, end) : give a new array
array2 = array.slice(1, 3);
console.log("Original array", array);
console.log("Array after slice()", array2);

// indexOf()
console.log(array.indexOf('Blue'))

// includes : check if the element is present in array or not
console.log(array.includes('Blue'))
console.log(array.includes('red'))

// sort()
console.log("After sorting: ");
console.log(array.sort());
console.log(arr.sort());

spArray = ['red', 151, true, 5.13, 'aa', 'ab', 19]
console.log("Before sorting: ");
console.log(spArray);
console.log("After sorting: ");
console.log(spArray.sort());

