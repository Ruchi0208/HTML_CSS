// Create a symbol:premitive value so new not required
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(typeof sym2);

// console.log(Symbol('123') === Symbol('123')); //false
//console.log(`Hello ${sym1}`); //error:cannot convert symbol to string
// console.log(`Hello ${sym1.toString()}`); //converts

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1'; //symbol
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3'; //property(regular property)
myObj.key4 = 'Prop4';

// console.log(myObj[KEY1]); //prop1
// console.log(myObj[KEY2]); //prop2

// Symbols are not enumerable in for...in
// for(let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`);
// }
//op:we only get key3:prop3 and key4:prop4

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'})); //op:empty object