class Vehicle {
  constructor(make) {
    this.make = make;
  }

  _displayMake() { // Simulated protected method
    console.log(`This is a ${this.make}`);
  }
}

class Car extends Vehicle {
  showDetails() {
    this._displayMake(); // Can access _displayMake inside the subclass
  }
}

const myCar = new Car('Toyota');
myCar.showDetails(); // Output: This is a Toyota
// myCar._displayMake(); // ⚠️ Though accessible, it is intended to be used only within subclasses
