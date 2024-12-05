// Callback Functions :

    // In JavaScript, a callback function is a function that is passed into another function as an argument. This function can then be invoked during the execution of that higher order function (that it is an argument of).

    // Since, in JavaScript, functions are objects, functions can be passed as arguments.




const isEven = (n) => {
    return n % 2 == 0;
};

const oddOrEven = (evenNo, num) => {
    const isNumEven = evenNo(num);
    console.log(isNumEven);
};

oddOrEven(isEven, 12);

