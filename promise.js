p = new Promise((resolve, reject) => {
    payment = "fail";
    if (payment === "success") {
        resolve("Payment successfull")
    } else {
        reject("Payment failed")
    }
});

p
    .then((result) => {
        console.log(result);
    })

    .catch((result) => {
        console.log(result);
    })