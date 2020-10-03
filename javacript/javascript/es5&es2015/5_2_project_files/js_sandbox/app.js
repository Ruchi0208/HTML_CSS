//not recommended to use to declare string number etc primitives as objects its confusing
// String

const name1 = 'Jeff';
const name2 = new String('Jeff'); //typeof name2 is object

//name2.foo = 'bar';
// console.log(name2);

console.log(typeof name2);

if(name2 === 'Jeff'){
  console.log('YES'); // if we do double equals then it will say yes bcz double equals doesnt care for the type
} else {
  console.log('NO'); //we get no bcz the type is object and not a string even if value is same
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x, y){
  return x + y;
}

const getSum2 = new Function('x','y', 'return 1 + 1');

// Object
const john1 = {name: "John"};
const john2 = new Object({name: "John"});
console.log(john2);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);