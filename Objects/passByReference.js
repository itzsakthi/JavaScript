// Objects - Pass by Reference :
    // Numbers (and similar types) - pass by value, so you can change them inside the function, but the original stays the same.
    // Objects are - pass by reference, so when you change the object inside the function, the original object changes too.

const origNum = 8;
const origObj = {color: 'blue'};

// Factory function - they often accept parameters in order to customize the returned object.
const change = (num, obj) => {
  num = 7;
  obj.color = 'red';
};

change(origNum, origObj);

// Will output 8 since integers are passed by value.
console.log(origNum);

// Will output 'red' since objects are passed 
// by reference and are therefore mutable.
console.log(origObj.color);