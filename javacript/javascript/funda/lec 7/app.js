//String Methods and concatenation;;

const fName='Ruchi';
const lName='Tripathy';
const age=20;
const str='Hello there my name is ruchi';

let val;

//concatnation;
val = fName + lName; //RuchiTripathy
val=fName + ' ' + lName; // Ruchi Tripathy

//Append;
val = 'Ruchi ';
val += 'Tripathy';
//output:Ruchi Tripathy

val="hello  my name is " + fName + ' and I am ' + age;

//Escaping;
val = 'That's awesome,I can't wait'; //error
val = 'That\'s awesome,I can\'t wait'; //corect output as string //escaping
val = "That's awesome,I can't wait"; //correct output as string

//Length;
val=fName.length; //5

//concat method;
val = fName.concat(' ',lName); //Ruchi Tripathy

//change case;
val=fName.toUpperCase();
val=fName.toLowerCase();

//indexing;
val=fName[2]; // C

//indexof();
val=fName.indexOf('i'); //4
val=fName.lastIndexOf('i') //4 //from last

//charAt();
val=fName.charAt('2'); // c

//get last char;
val=fName.chatAt(firstName.length-1);

//substring();
val=fName.substring(0,3); //Ruch

//slice();
val=fName.slice(0,3); //Ruch
val=fName.slice(-3); //chi

//split();
val=str.split(' ');

//replace();
val=str.replace('ruchi','ramya');

//includes();
val=str.includes('Hello'); //true bcz its there in str