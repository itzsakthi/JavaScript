// Method Overriding :

    // Method Overriding occurs when a method in a child class has the same name as a method in its parent class, but with a different implementation. JavaScript allows method overriding using classes and inheritance.



class Animal {
  sound() {
    console.log("This animal makes a sound.");
  }
}

class Dog extends Animal {
  sound() {
    console.log("The dog barks.");
  }
}

const myDog = new Dog();
myDog.sound(); // Output: The dog barks.



// Explanation:

    // The Dog class overrides the sound method of the Animal class.
    // When myDog.sound() is called, it uses the sound method defined in the Dog class, not the one in Animal.