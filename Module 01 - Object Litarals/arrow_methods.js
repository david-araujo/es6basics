/*
    Methods are just functions that you can call using the propertie name followed by () empty or with some parameters.
    On ES6 we have a new way to use functions that calls Arrow Functions. But first let's take a look at on GETTERS and SETTERS.
*/

var spaceship = {
    Name: 'ES5',
    Reserves: 4,
    getFuel: function(){
        // Use this keyword to access the object properties.
        return this.Reserves;
    },
    setFuel: function(value){
        this.Reserves = value;
        console.log('Your reserves are updated to ...');
    }
};

console.log(spaceship);
console.log(spaceship.getFuel());
spaceship.setFuel(10);
console.log(spaceship.getFuel());
console.log(spaceship);
console.log('******');

//NOW ON ES6
var supership = {
    Name: 'ES5 OLD ONE',
    Reserves: 5,
    get fuel() {
        return this.Reserves;
    },
    set fuel(value){
        this.Reserves = value;
        console.log('Your reserves are updated to ...');
    },
    set setName(name){
        this.Name = name;
        console.log('Hey the name of our super spaceship was changed... \\o/');
    }
};

console.log(supership);
// If you need to get value you just need call the object.getMethod.
console.log(supership.fuel);
// If you need to set some value on attribute you can use object.setMethod = newValue. ES6 check if the method is a Set Method.
supership.fuel = 10;
console.log(supership.fuel);
// Setting the Name Attribute using a pattern name to Set methodes.
supership.setName = 'ES6 ROCKS';
console.log(supership);
console.log('---------------------------------------------------------------------------------');

/*
    ARROW FUNCTIONS

    (parameters) => {
      // function body
    };
*/

// An arrow function with exactly one parameter can omit the parenthesis.
var double = value => {
  return value * 2;
};
console.log('Double function omiting parameter parentesis and returnig the value: ' + double(4) + '\n******');

// The return statement is implicit, and there’s no need for brackets denoting the function body anymore, as you can only use a single expression.
var triple = value => value * 3;
console.log('Triple function omiting parameter parentesis and brackets body returnig the value: ' + triple(4) + '\n******');

// To return an object literal, you’ll need to wrap that object literal expression in parenthesis.
var objectFactory = (name, age) => ({ Name: name, Age: age });
var david = objectFactory('David Araujo', 25); console.log(david + '\n******');

// Passing an arraow function as callback parameter to another function and returning an array of objetct
var maped = [1,2,3].map(value => ({ 'number' : value, verified : true }));
console.log(maped + '\n******');

// An IFF on ES6 create and involing a function
((greeting) => console.log(greeting))('Hello IIF on ES6');
