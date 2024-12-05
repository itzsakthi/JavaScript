// var:
//     The declaration is hoisted, so you can reference it before it is declared, but its value will be undefined until it is assigned.

// let and const:
//     They have a temporal dead zone(TDZ), meaning you cannot access them before their declaration, and doing so results in a ReferenceError.


// Using 'var'
console.log(myVar); // Output: undefined (declaration is hoisted)
var myVar = 5;
console.log(myVar); // Output: 5



// Using 'let'
try {
  console.log(myLet); // Throws a ReferenceError due to TDZ
} catch (error) {
  console.log(error); // Output: ReferenceError: Cannot access 'myLet' before initialization
}
let myLet = 10;
console.log(myLet); // Output: 10



// Using 'const'
try {
  console.log(myConst); // Throws a ReferenceError due to TDZ
} catch (error) {
  console.log(error); // Output: ReferenceError: Cannot access 'myConst' before initialization
}
const myConst = 15;
console.log(myConst); // Output: 15
