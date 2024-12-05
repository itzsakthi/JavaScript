// Constructor 1
class Product {

constructor(name, price) {
    this.name = name;
    this.price = price;
}

productDetails() {
    return `Product name : ${this.name} and its Price : ${this.price}`;
}

}

var car = new Product("Buggati", '44.65 crore INR');
var shoe = new Product("Adidas", '4000 INR');

console.log(car.productDetails());
console.log(shoe.productDetails());



// Constructor 2
var billing = function() {
  this.amount = 0;
  
  this.setAmount = function(newAmount) {
    this.amount = newAmount;
  };
  
  this.getAmount = function() {
    return this.amount;
  };
};

var myBilling = new billing();
myBilling.setAmount(100);
console.log(myBilling.getAmount()); // Output: 100
