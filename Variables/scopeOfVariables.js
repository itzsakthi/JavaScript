// Scope of variables :
    // var: Global (if declared outside a function) or function scoped (if declared inside a function).
    // let: Block scoped (local to the block it is declared in).
    // const: Block scoped (local to the block it is declared in) and requires initialization at the time of declaration.



var a = 5;  // Global-scoped
function exampleVar() {
    var b = 10; // Function-scoped
    console.log(a); 
    console.log(b); 
}
exampleVar(); 
console.log(b); // Uncaught ReferenceError: b is not defined




function exampleLet() {   
    let y = "hi";   // block-scoped
    console.log(y);
}
exampleLet();
console.log(y); // Uncaught ReferenceError: y is not defined




function exampleConst() {
    const z = "hello";   // block-scoped
    console.log(z);
}
exampleConst();
console.log(z); // Uncaught ReferenceError: z is not defined
