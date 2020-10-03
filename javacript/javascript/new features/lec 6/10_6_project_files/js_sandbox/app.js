// SETS - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100); //dont get added as 100 already there

// const set2 = new Set([1, true, 'string']);
// console.log(set2);

// console.log(set1);

// Get count
// console.log(set1.size);

// Check for values
// console.log(set1.has(100)); //true if it has
// console.log(set1.has(50 + 50)); //true (exp acceptable)
// console.log(set1.has({name: 'John'})); //false bcz it is a referance value

//console.log({name : 'Ruchi'} === {name : 'Ruchi'});
//op:false bcz its pointing to diff location in mem and not priitive lyk int string bool

//console.log('hello' === 'hello');
//op:true bcz string is primitive type



// Delete from set
// set1.delete(100);

// console.log(set1);



// ITERATING THROUGH SETS

// For..of 
// for(let item of set1) {
//   console.log(item);
// }

// ForEach Loop
// set1.forEach((value) => {
//   console.log(value);
// });

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);
