class Parent {
    constructor() {
        this.x = 10
        console.log("Parent constructor");
        console.log(`x = ${this.x}`);
    }
}

class Child extends Parent {
    constructor() {
        super();
        console.log("Child constructor");
    }
}

c = new Child()