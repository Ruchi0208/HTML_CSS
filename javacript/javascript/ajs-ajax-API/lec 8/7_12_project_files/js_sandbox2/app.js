// const sayHello = function() {
//   console.log('Hello');
// }
//sayHello(); //to get op

// const sayHello = () => {
//   console.log('Hello');
// }
//sayHello(); //to get op

// One line function does not need braces
// const sayHello = () => console.log('Hello');
//sayHello(); //to get op




// One line returns:same as return
// const sayHello = () => 'Hello';
//console.log(sayHello()); //to get op

// Same as above
// const sayHello = function() {
//   return 'Hello';
// }
//console.log(sayHello()); //to get op





// Return object
// const sayHello = () => ({ msg: 'Hello' });
//console.log(sayHello()); //to get op




// Single param does not need parenthesis
//const sayHello = (name) => console.log(`Hello ${name}`);
//sayHello('Ruchi'); //to get op

//same as above
// const sayHello = name => console.log(`Hello ${name}`);
//sayHello('Ruchi'); //to get op




// Multuiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
// sayHello('Ruchi', 'Tripathy'); //to get op





const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shorter : same as above
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest :same as above
const nameLengths = users.map(name => name.length);

console.log(nameLengths);