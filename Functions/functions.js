// Functions Assigned to Variables :

    // In JavaScript, functions are a data type just as strings, numbers, and arrays are data types. 

    // Therefore, functions can be assigned as values to variables, but are different from all other data types because they can be invoked.


let addNum = (no) => {
  return no + no ;
};

let num = addNum;  // assigning function addNum to the variable num

addNum(2);  // both these will return the same value 4.
num(2);