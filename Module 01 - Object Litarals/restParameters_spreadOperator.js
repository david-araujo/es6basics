/*
    Rest Parameter and Sread Operator ...
*/

// Using arguments returns a confusing and numered object of parameters sent to the function cast.
function cast (){
    return arguments;
}

var args = cast(1, 'teste', {name: 'David'}, [1,2,3,4]);
console.log('arguments on ES5 is soooo confuse... \\o?\n', args);
console.log('******');

function cast1 (...list){
    return list;
}

var args = cast1 (1, 'teste', {name: 'David'}, [1,2,3,4]);

console.log('ES6 returns an array: ', args);
console.log('******');

// Let's supose that you want recive 2 parameters and keep the rest in an array
function cast2 (p1, p2, ...rest){
    console.log('The p1 = ' + p1 + ' p2 = ' + p2 + ' and rest is an array... ', rest );
}

var args = cast2 (1, 'teste', {name: 'David'}, [1,2,3,4]);
console.log('******');

// Spread is an useful way of combining multiple arrays.
var arr1 = [2,3,4];
var arr2 = ['a', 'b', 'c'];
var arrS = [1, ...arr2, 5, ...arr1];

console.log("SPREAD OPERATOR is an incredible way to join arrays: \n", arr1, arr2, arrS);
console.log('******');

// Besides spreading onto arrays, you can also spread items onto function calls.
function multiply (a, b, ...rest){
    console.log('LOOK AT THE CODE to understand the magic: ',rest);
    return a * b;
}

var teste = multiply(...[2,3,4,5,'a','b','c']);
console.log('It\'s AWESOME!!! Spread an array into variables and passing to the function... \\o/ ',teste);
