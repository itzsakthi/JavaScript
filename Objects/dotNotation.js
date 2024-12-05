// Dot Notation for Accessing Object Properties :
    // Properties of a JavaScript object can be accessed using the dot notation 
    // object.propertyName. 
    // Nested properties of an object can be accessed by chaining key names in the correct order.

const apple = { 
  color: 'Green',
  price: {
    bulk: '$3/kg',
    smallQty: '$4/kg'
  }
};
console.log(apple.color); // 'Green'
console.log(apple.price.bulk); // '$3/kg'