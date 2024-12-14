class ElectronicDevice {
    getCharged() {
        console.log("Plug in to charge");
    }

    use() {
        console.log("use for making work easier");
    }
}

// inheritance
class Laptop extends ElectronicDevice {
    // method ovverriding
    use() {
        console.log("use laptop for calculations and more");
    }

    // child-specific
    openBrowser() {
        console.log("Use browser to search on internet");
    }
}

l = new Laptop();
l.getCharged();
l.use()
l.openBrowser()