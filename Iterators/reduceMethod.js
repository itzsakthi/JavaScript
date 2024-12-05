// .reduce() method :

    // The .reduce() method in JavaScript is used to iterate through an array and accumulate a single value based on a callback function. 

    // It's powerful for operations like summing up numbers, calculating averages, or even flattening arrays. The method executes a reducer function on each element of the array, resulting in a single output value.



// Syntax of .reduce() :

// array.reduce((accumulator, currentValue, currentIndex, array) => {
//     // logic
// }, initialValue);




// Sum of the Array
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15




// Highest element in a Array
const values = [10, 5, 15, 20, 3];

const max = values.reduce((accumulator, currentValue) => {
  return currentValue > accumulator ? currentValue : accumulator;
}, values[0]);

console.log(max); // Output: 20

