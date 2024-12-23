p = new Promise((resolve, reject) => {
    payment = "success";
    if (payment === "success") {
        resolve("Payment successfull")
    } else {
        reject("Payment failed")
    }
});

p
    .then((result) => {
        console.log(result);
        return "message from 1st then()";
    })

    .then((result) => {
        console.log(result);
        return "message from 2st then()";
    })

    .then((result) => {
        console.log(result);
    })

    .catch((result) => {
        console.log(result);
    })