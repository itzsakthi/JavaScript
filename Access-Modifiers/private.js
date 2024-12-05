class Car {

    constructor(make) {
    this.make = make; 
    }

    #startEngine() {     // private method starts with a #
    console.log('Engine has started !');
    }

    drive() {   // public method
    this.#startEngine();
    console.log(`I am driving a ${this.make}`);
    }
}

const myCar = new Car('Audi');

myCar.drive();
// myCar.#startEngine();   // This will give a Error.