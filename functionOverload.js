function add(...args) {
    sum = 0;
    for (i = 0; i < args.length; i++) {
        sum = sum + args[i];
    }
    console.log("Sum is :", sum)
}


add(10)
add(10, 20)
add(10, 20, 30)
