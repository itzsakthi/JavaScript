class Car {
    constructor(make) {
    this.make = make;  // public property
    }

    drive() {   // public method
    console.log(`I am driving a ${this.make}`);
    }
}

const myCar = new Car('Buggati');

console.log(myCar.make);   // calling a public property outside of its class works.
myCar.drive();             // calling a public method outside of its class works.