// Factory Function :
    // A JavaScript function that returns an object is known as a factory function.
    // Factory functions often accept parameters in order to customize the returned object.
    // A factory function is a function that returns a new object each time it is called, allowing for the 
    // Creation of multiple instances of similar objects without using classes.

const dogFactory = (name, age, breed) => {
  return {
    name: name,    // Property 'name' gets the value from the 'name' parameter.
    age: age,      // Property 'age' gets the value from the 'age' parameter.
    breed: breed,  // Property 'breed' gets the value from the 'breed' parameter.

    bark() {
      console.log('Woof!');
    }
  };
};

const myDog = dogFactory('Buddy', 3, 'Golden Retriever');
console.log(myDog.name);  
console.log(myDog.age);  
console.log(myDog.breed); 
myDog.bark()

// Uses :
    // Encapsulation: Factory functions allow you to encapsulate the object creation logic in one place, making it easier to create objects with consistent structure.

    // Avoid new Keyword: Unlike classes, factory functions don’t require using the new keyword, which some developers find more straightforward and readable.

    // Custom Initialization: You can include logic within the factory function to customize the returned object, such as adding default values or performing calculations based on the inputs.