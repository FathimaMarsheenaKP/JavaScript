// callback hell or pyramid of doom
setTimeout(function search() {
    console.log("Searching for product");

    setTimeout(function select() {
        console.log("Selecting the product");

        setTimeout(function add_to_cart() {
            console.log("Adding to the cart");

            setTimeout(function pay() {
                console.log("Making the payment");

                setTimeout(function receive_order() {
                    console.log("Waiting to receive order");
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);








