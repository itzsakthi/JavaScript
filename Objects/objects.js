// Objects :
    // An object is a built-in data type for storing key-value pairs.
    // Data inside objects are unordered, and the values can be of any type.



// Accessing non-existent JavaScript properties :
    // When trying to access a JavaScript object property that has not been defined yet, the value of undefined will be returned by default.
const classElection = {
  date: 'January 12'
};
console.log(classElection.place); // undefined




// JavaScript Objects are Mutable :
    // Their contents can be changed, even when they are declared as const. 
    // New properties can be added, and existing property values can be changed or deleted.
const student = {
  name: 'Sheldon',
  score: 100,
  grade: 'A',
}

console.log(student)
// { name: 'Sheldon', score: 100, grade: 'A' }

delete student.score
student.grade = 'F'
console.log(student)
// { name: 'Sheldon', grade: 'F' }