// Arrays :

    // Arrays are lists of ordered, stored data. They can hold items that are of any data type. Arrays are created by using square brackets, with individual elements separated by commas.

    // JavaScript arrays are mutable, meaning that the values they contain can be changed.

    // Even if they are declared using const, the contents can be manipulated by reassigning internal values or using methods like .push() and .pop().


const numbers = [1, 2, 3];

// .length :
console.log(numbers.length); 

// Index :
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

// Method .push() :
// Adding a single element:
const cart = ['apple', 'orange'];
cart.push('pear'); 

// Adding multiple elements:
const values = [1, 2];
values.push(3, 4, 5);

// Method .pop() :
    // The .pop() method removes the last element from an array and returns that element.
const ingredients = ['eggs', 'flour', 'chocolate'];

const poppedIngredient = ingredients.pop(); // 'chocolate'
console.log(ingredients); // ['eggs', 'flour']

