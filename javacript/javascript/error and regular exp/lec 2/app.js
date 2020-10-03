let re;
re = /hello/;
re = /hello/i; //i:case insensitive
// re = /hello/g; //g:global search (serahces for all re not only first one)

// console.log(re); //op:/hello/
// console.log(re.source); //op:hello



//1.exec() -Return result in an array if theres a match else null if no match

// const result = re.exec('Ruchi hello world');
//op:index where the re starts the input and th re
//op:["hello" , index:5 , input:"Ruchi hello world"]

// const res = re.exec('hi world');
// op:null (as doesnt match)

// console.log(result);
// console.log(result[0]); //op:hello
// console.log(result.index); //op:0
// console.log(result.input); //op:hello world



//2.test() - returns true or false if theres match

// const result = re.test('Hello');

// console.log(result); 
//for /hello/ op:false as h is in lower case in re and capital in input
//for /hello/i op:true



//3.match() -return array or null(opp of exec)

// const str = 'Hello There';
// const result = str.match(re);

// console.log(result);
//op:same as exec



//4.serach() - returns  index of the first match if not found returns -1

// const str = 'Ruchi Hello There';
// const result = str.search(re);

// console.log(result); //op:5





//5.replace() -return new string  with some or all matches of a pattern

const str = 'Hello There';
const newStr = str.replace(re, 'Hi');

console.log(newStr); //op:Hi There