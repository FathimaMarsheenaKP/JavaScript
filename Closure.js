function outer() {
    var out = 10;
    return function inner() {
        console.log(out);
    }
}

res = outer();
console.log(res);
res();