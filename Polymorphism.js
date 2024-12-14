class Animal {
    sleep() {
        console.log("Animal is sleeping");
    }
    move() {
        console.log("Animal is moving");
    }
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    eat() {
        console.log("Dog is eating");
    }
}

class Tiger extends Animal {
    eat() {
        console.log("Tiger is eating");
    }
}

class Elephant extends Animal {
    eat() {
        console.log("Elephant is eating");
    }
}

class AnimalApp {
    accessAnimal(an) {
        an.sleep();
        an.move();
        an.eat();
    }
}

app = new AnimalApp()
app.accessAnimal(new Dog())
app.accessAnimal(new Tiger())
app.accessAnimal(new Elephant())