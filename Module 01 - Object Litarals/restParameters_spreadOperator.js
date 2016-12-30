/*
    Spread operator ... is a new functionallity that is similar to arguments but with some caveats.
*/

// Using arguments returns a confusing and numered object of parameters sent to the function spread.
function spread (){
    return arguments;
}

var args = spread(1, 'teste', {name: 'David'}, [1,2,3,4]);

console.log(args);
console.log('******');

// Using the new spread operator you can do AMAZING THINGS...
function spread1 (...list){
    return list;
}

var args = spread1 (1, 'teste', {name: 'David'}, [1,2,3,4]);

console.log('ES6 returns an array: ', args);
console.log('******');

// Let's supose that you want recive 2 parameters and keep the rest in an array
function spread2 (p1, p2, ...others){
    console.log('The p1 = ' + p1 + ' p2 = ' + p2 + ' and others is an array... ', others );
}

var args = spread2 (1, 'teste', {name: 'David'}, [1,2,3,4]);
console.log('******');
