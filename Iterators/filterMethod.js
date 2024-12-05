// The .filter() Method :

    // The .filter() method executes a callback function on each element in an array. The callback function for each of the elements must return either true or false. The returned array is a new array with any elements for which the callback function returns true. 



const num = [4, 11, 42, 14, 39];
const filteredNum = num.filter(n => {  
  return n > 5;
});

console.log(filteredNum);
