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
console.log('*********************************');

//NOW ON ES6
var supership = {
    Name: 'ES6',
    Reserves: 5,
    get fuel() {
        return this.Reserves;
    },
    set fuel(value){
        this.Reserves = value;
        console.log('Your reserves are updated to ...');
    }
};

console.log(supership);
console.log(supership.fuel);
supership.fuel = 10;
console.log(supership.fuel);
console.log(supership);
console.log('---------------------------------------------------------------------------------');

/*
    ARROW FUNCTIONS

    (parameters) => {
      // function body
    };
*/
