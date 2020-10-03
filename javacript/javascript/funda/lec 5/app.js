//type conversion;;

let val;

//number to string;;
val=5;
//ouput 
console.log(val); //as a number
console.log(typeof val); //number
console.log(val.length); //undefined bcz it is not a string

val1=String(333);
//output
console.log(val1); // as a string
console.log(typeof val1); //string
console.log(val1.length); //3

val2=String(4+4);
//output
console.log(val2); // 8 :as a string
console.log(typeof val2) //string
console.log(val2.length); // 1


//boolean to string;;
val=String(true);
//output
console.log(val); //as a string
console.log(typeof val); //string
console.log(val.length); //4


//date to string;;
val=String(new Date());
//output
console.log(val); //as a string
console.log(typeof val); //string
console.log(val.length); //57


//array to string;;
val=String([1,2,3,4]);
//output
console.log(val); //as a string(list of numbers)
console.log(typeof val); //string
console.log(val.length);//7


//can use tostring() for type conversion to string;;
val=(5).toString();
//output
console.log(val); //as a string
console.log(typeof val); //string
console.log(val.length); //1

//string to number;;
val=Number('5');
//output
console.log(val); //as a number
console.log(typeof val); //number
console.log(val.toFixed()); //5 (specifies upto how many decimal point we want)

val=Number('hello')
//output
console.log(val); //NaN(not a number)
console.log(typeof val); //number
console.log(val.length); //NaN


//boolean to number;;
val=Number(true);
//ouput
console.log(val); //1: as a number
console.log(typeof val); //number
console.log(val.toFixed()); //1
//for null and false it will give as 0


//array to number;;
val=Number([1,2,3,4,5]);
//output
console.log(val); //NaN
console.log(typeof val); //number
console.log(val.toFixed()); //NaN

//can use parseInt() to convert to int;;
val=parseInt('100.30');
//can use parseFloat() to convert to float;;
val= parseFloat('100.30');


//type conversion by js;;
const val1=String(5);
const val2=6;
const sum=val1+val2;

console.log(sum); //converts 6 to string automatically and concats both
//output:56
console.log(typeof sum); //string