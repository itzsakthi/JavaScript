// Arrow Functions (ES6) :
    // The syntax for an arrow function expression does not require the function keyword and uses a fat arrow => to separate the parameter(s) from the body. 
    // Arrow functions with a single parameter do not require () around the parameter list.
    // Arrow functions with a single expression can use the concise function body which returns the result of the expression without the return keyword.


// Arrow function with two parameters 
const sum = (firstParam, secondParam) => { 
  return firstParam + secondParam; 
}; 
console.log(sum(2,5)); 

// Arrow function with no parameters 
const printHello = () => { 
  console.log('hello'); 
}; 
printHello(); 

// Arrow functions with a single parameter 
const checkWeight = weight => { 
  console.log(`Baggage weight : ${weight} kilograms.`); 
}; 
checkWeight(25); 

// Concise arrow functions
const multiply = (a, b) => a * b; 
console.log(multiply(2, 30)); 