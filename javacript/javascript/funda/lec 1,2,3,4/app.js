//using console:lecture 1
// Pop up notification
//alert('Hello !!');

//single line comment
/* multi 
line 
comment*/

//log to console
/*console.log('Hello !'); //strings are black
console.log(123); // numbers are blue
console.log(true); //booleans are blue
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1 , b:2});
console.table({a:1 , b:2});


console.error('This is some error');
console.clear();
console.warn('This is a warning');

//to know how much time it takes to run the code in between this
console.time('Hello');
	console.log('World');
	console.log('World');
	console.log('World');
	console.log('World');
	console.log('World');
	console.log('World');
console.timeEnd('Hello');*/


//----------------------------------------------------------------


// variables let const:lecture 2

var name="ruchi";
console.log(name);
name="ramya";
console.log(name);

//Init var
var greeting;
console.log(greeting); //output : undefined
greeting="tripathy"
console.log(greeting); //output : tripathy

/*varibales:
can include letters,numbers,_,$
cannot start with a number*/
var name="ruchi"

//multiword vars
var firstName="ramya" // Camel case
var first_name="ruch" //underscore
var FirstName="tripathy" //pascal case
var firstname;


//LET
let name="ruchi";
console.log(name);
name="ramya";
console.log(name);


//CONST
const name="ruchi";
console.log(name);
//cannot reassign
//name="ramya"; //error
//have to assign a value
//const greeting; //error

const person={name:'ruchi' , age:20}
person.name='ramya' //reassign the value in object i.e name and age but cannot reassign object i.e person itself
console.log(person);

const numbers=[1,2,3,4,5];
numbers.push(6);
console.log(numbers);


//-----------------------------------------------------------------


//Datatypes : Lecture 3


//primitive;;

//string
const name = 'ruchi';
console.log(typeof name);

//number
const age = 45;
console.log(typeof age);

//boolean
const kids=true;
console.log(typeof kids);

//null
const car=null;
console.log(typeof car); //it will show object but its not its a bug

//undefined
let test;
console.log(typeof test);

//symbol
const sym=Symbol();
console.log(typeof sym);


//Reference types -objects;;

//array
const hobbies = ['movies' , 'music'];
console.log(typeof hobbies);

//object literal
const address={
	city : 'Boston',
	state: 'MA'
}
console.log(typeof address);

//date
const today=new Date();
console.log(today);
console.log(typeof today);


