// Javascript Destructuring Assignment-shorthand syntax => that allows object properties to be extracted into specific variable values. 

// It uses a pair of curly braces ({}) with property names on the left-hand side of an assignment to extract values from objects.  

// The number of variables can be less than the total properties of an object.

const Sakthivel = {
  Age: '21',
  Role: 'SDE',
  Company: 'Smithworks'
};
const {Age, Role, Company} = Sakthivel;
console.log(Age); // '21'
console.log(Role); // 'SDE'
console.log(Company); // 'Smithworks'