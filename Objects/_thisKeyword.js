// this keyword : 
//     * Object method => refers to the Object itself,
//     * StandAlone function or CallBack function => refers to the Global Object,
//     * Strict mode  => refeers to undefined.

// this is why we use _this variable to preserve the value of this keyword -> to use in a Callback function or so.

// After JavaScript ES6 Arrow functions can be used to solve this issue.

function person(name) {

  this.name = name; 

    // Object Method
    this.objectMethod = function(){
        console.log('Hello, my name is ' + this.name + ' from Object Method');
    }

    // Callback Method
    var _this = this;
    this.callbackMethod = function() {
        setTimeout(function() {
        console.log('Hello, my name is ' + _this.name + ' from Callback Method');
        }, 1000);
    };

    // Arrow Method
    this.arrowMethod = function() {
        setTimeout(() => {
        console.log('Hello, my name is ' + this.name  + ' from Arrow Method');
        }, 1000);
    };

    }

var person1 = new person('Sakthi');

person1.objectMethod();
person1.callbackMethod();
person1.arrowMethod();

