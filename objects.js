/*
    Object Literal is any object declaration using the {} shorthand syntax where you can have Properties and Methods.
*/

var book = {
    // Properties
    Title: 'ES6 Basics',
    Author: 'David Araujo',
    Pages: 100,
    // Methods are just functions that you can call using the propertie name followed by () empty or with some parameters.
    openBook: function(){
        console.log('The book is open...');
    }
};

// Showing an object
console.log(book);
//Calling a Method
book.openBook();
console.log('-----------------------------------------');

/*
    Property Value Shorthand is a property whose value is a reference to a variable by the same name.
*/

var name = 'David Araujo', age = 25;

function sayHello(){
    console.log('Hello World');
};

var person = {name, age, sayHello};

console.log(person);
person.sayHello();
console.log('-----------------------------------------');

/*
    Computed Property Names used when you have to declare objects that contain properties with names based on variables or other JavaScript expressions, as shown in the following piece of code written in ES5
*/

var expertise = 'IT';
var student = {
    name: 'David Araujo',
    age: 25
};
// Here you need access the object to create a new propertie
student[expertise] = {
    years: 4,
    interests: ['ES5', 'PHP']
};

console.log(student);
console.log('***');

// NOW ON ES6
var expertise = 'IT';
var studentEs6 = {
    name: 'David Araujo',
    age: 25,
    //Inside the Obeject you can create the new propertie just using [] notation.
    [expertise]: {
        years: 4,
        interests: ['ES6', 'NodeJS', 'PHP']
    }
};

console.log(studentEs6);
console.log('-----------------------------------------');

/*
    A common scenario for computed property names is when we want to add an entity to an object map that uses the entity.id field as its keys, as shown next. Instead of having to have a third statement where we add the grocery to the groceries map, we can inline that declaration in the groceries object literal itself.
*/

var grocery = {
    id: 'bananas',
    name: 'Bananas',
    units: 6,
    price: 10,
    currency: 'USD'
};
var groceries = {
    [grocery.id]: grocery
};

console.log(groceries);
console.log('-----------------------------------------');

/*
    
*/
