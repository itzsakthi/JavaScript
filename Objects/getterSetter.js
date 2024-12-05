// Getter Usage: 
//     When dev.name is accessed, the get name() method returns the value of _name, which is 'Sakthi' initially.

// Setter Usage: 
//    When dev.name is assigned a new value like 'Tharak', the set name(newName) method verifies that the input is valid before updating _name.

// Invalid Input Handling: 
//     If an invalid input (like an empty string) is assigned to dev.name, the setter rejects it and logs an error message, ensuring that the _name remains unchanged.

const dev = {
    _name : "Sakthi",

    get name() {
    return this._name;
    },

    set name(newName) {
        if(typeof newName == 'string' && newName.length > 0) {
            this._name = newName;
        } else {
            console.log("ERROR: name must be a non-empty string");
        }
    }
};

// Using the getter
console.log(dev.name);

// Using the setter
dev.name = 'Tharak'
console.log(dev.name);

// Attempting to set an invalid name
dev.name = ''
console.log(dev.name);  // unchanged still returns Tharak
  