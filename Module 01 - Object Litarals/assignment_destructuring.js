/*
    Destructuring is a way to bind properties to one or many variables.
    It works with objects, arrays, and even in function parameter lists.
*/

// Object Destructuring

var character = {
    name : 'David',
    pseudonim : 'Batman',
    metadata : {
        age : 25,
        gender : 'male',
        cloth : {
            type : 'armor',
            color: 'black'
        },
        enemy : undefined
    },
    batarang: ['gas pellet', 'bat-mobile control', 'bat-cuffs']
};

console.log(character);

// To set a variable on ES5 you could do var name = character.name;
// On ES6 it's most simple. You can create a variable using the propertie name and value.
var { name } = character;
console.log(name + '\n******');

// You can also declare more than one variable and still declatring new variables.
var { name, pseudonim } = character, gret = 'Hello';
console.log(gret + ' my name is ' + name + ' pseudonim ' + pseudonim + '!\n******');

// If you want to extract a property but would like to declare it as a variable named alias, you can use the following destructuring syntax known as aliasing.
var { pseudonim : alias } = character;
console.log('Hey this is my Alias: ' + alias + '!\n******');

// Going deepper and get subobjects from metadata.
var { metadata : { gender, age } } = character;
console.log('Here is my gender: ' + gender + ' and age: ' + age + '...\n******');

// Let's get the color and the type of the cloth setting an Alias.
var { metadata : { cloth : { type : clothType, color : clothColor } } } = character;
console.log('I use a ' + clothColor + ' ' + clothType + '... \\o/\n******' );

// We can provide defult values to a variable that is undefined
var { metadata : { enemy = 'Jocker' } } = character;
console.log(enemy + ' is a smile enemy!');

console.log('---------------------------------------------------------------------------------');

/*
    Destructuring arrays
    The syntax for destructuring arrays is similar to that of objects.
*/

var { batarang } = character;
console.log('Lets check the arsenal of Batarangs:');
console.log(batarang);
console.log('******');

// Simple destructuring where we can define default values if not exist
var [gas, mobile, cuffs, other = 'Light Saber'] = batarang;
console.log('In variables we have gas: ' + gas + ', mobile: ' + mobile + ', cuffs: ' + cuffs + ' and other: ' + other + '. Bacause I could be a JEDI too!\n******');

// Some times we need just to get part of the guns sooo....
var [first,,second] = batarang;
console.log('I just need the first wapon: ' + first + ' and second: ' + second + ' to fight against the enemies...\n******');

// In ES5, when you have to swap the values of two variables, you typically resort to a third, temporary variable, as in the following snippet.
var left = 1;
var right = 2;
console.log('Before swap we have left = ' + left + ' and right = ' + right);
var aux = left;
left = right;
right = aux;
console.log('After swap we have left = ' + left + ' and right = ' + right + '\n******');

// Destructuring helps you avoid the aux declaration and focus on your intent. Once again, destructuring helps us convey intent more tersely and effectively for the use case.
var left6 = 3;
var right6 = 4;
console.log('Before swap we have left = ' + left6 + ' and right = ' + right6);
[left6, right6] = [right6, left6];
console.log('After swap we have left = ' + left6 + ' and right = ' + right6 + ' ES6 the SIMPLE WAY ... \\o/');
console.log('---------------------------------------------------------------------------------');

/*
    Destructuring Function Paremeters
*/

// It's possible define default parametrs to avoit return NULL objects.
function destructuring ({param1 = 1, param2 = 2} = {}) {
    return {a: param1, b: param2};
};

// Returning default object and destructuring on variables a and b.
var {a, b} = destructuring ();
console.log('Here comes a = ' + a + ' b = ' + b + '\n******');

// Send a new object changing the first parameter.
var {a, b} = destructuring ( { param1 : 'Changed the first value param' } );
console.log('Here comes a = ' + a + ' b = ' + b + '\n******');

// Creating an obeject and changing all parameters
var o = {
    param1 : '\\o/',
    param2 : 'This is ES6!!!'
};

var {a, b} = destructuring ( o );
console.log('Here comes a = ' + a + ' b = ' + b + '\n******');
