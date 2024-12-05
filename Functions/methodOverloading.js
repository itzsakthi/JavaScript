// Method Overloading :

    // Method Overloading means defining multiple functions with the same name but different parameters. Unlike some other languages (like Java or C++), JavaScript does not natively support method overloading. However, you can simulate it by using conditional statements inside a single method to handle different argument cases.

function greet(name, age) {
  if (age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

// Call with one argument
greet("Alice"); // Output: Hello, Alice!

// Call with two arguments
greet("Bob", 30); // Output: Hello, Bob! You are 30 years old.
