// Shorthand Property Names:
//     When creating an object, if the variable name you want to use as a property key is the same as the 
//     variable’s name, you can use the shorthand syntax.

const dog1 = {
name : 'gsd',
type : 'rugged'
}
console.log(dog1);

// Both are same
const name = 'gsd'
const type = 'rugged'
const dog2 = { name, type } ;
console.log(dog2);



// Restrictions in Naming Properties : 

// Example of invalid key names
// const trainSchedule = {
//   platform num: 10,            // Invalid because of the space between words.
//   40 - 10 + 2: 30,            // Expressions cannot be keys.
//   +compartment: 'C'           // The use of a + sign is invalid unless it is enclosed in quotations.
// }
