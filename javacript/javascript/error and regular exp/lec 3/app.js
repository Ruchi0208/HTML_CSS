let re;
//literal characters
re = /hello/ ;
re = /hello/i ;


//Metacharacter Symbols
re = /^h/i;    //string Must start with
re = /world$/i;    //string Must ends with
re = /^hello$/i;    //string only contain hello(must begin and end with)
re = /h.llo/i;    //matches any ONE character in place of dot
re = /h*llo/i;    //matches any character for 0 or more times
re = /gre?a?y/i;   //optional character e or a (e?-optional e) or both or null but not any other character
re = /gre?a?y?/i;   //it will treat y as optional but not a ques mark
re = /gre?a?y\?/i;  //escape character



//Brackets [] - character sets
re = /gr[ae]y/i;     //must be an 'a' or 'e' but not null
re = /[GF]ray/i;      //must be a 'G' or 'F'
re = /[^GF]ray/i;    //match anything except a 'G' or a 'F'
re = /^[GF]ray/i;    //match anything which start with 'G' or 'F'
re = /[A-Z]ray/;     //match any uppercase letter
re = /[a-z]ray/;     //match any lowercase letter
re = /[A-Za-z]ray/; //match any letter of lower or upper case
re = /[0-9]ray/;    //match any digit within 0-9 also 10



//Braces {} - Quantifiers
re = /Hel{2}o/i;    //must occur exactly {m} amount of times (eg:l{2} matches 2 'l's)
re = /Hel{2,4}o/i;  //must occur between {m,n} (m to n) amount of times
re = /Hel{2,}o/i;   //must occur at least {m, } (m) times



//Parenthesis () - Grouping
re = /([0-9]x){3}/     //groups element to match occurances together
//matches also with 3x3x3x3x
re = /^([0-9]x){3}$/
//matches exactly with 3 times 3x



//shorthand character classes
re = /\w/;    //word character - alphanumeric or _
re = /\w+/;   // + : one or more
re = /\W/;    //Non-Word character
re = /\d/;    //Match any digit
re = /\d+/;   //Match any digit 0 or more times
re = /\D/;    //match any non-digit
re = /\s/;    //match whitespace char
re = /\S/;    //match non-whitespace char
re = /Hell\b/i;  //word boundary :matches with 'Hell' even its after 'Hello' .....without word boundary it will accept and match 'Hello' bcz it comes first




//Assertions
re = /x(?=y)/;    //match x only if followed by y
re = /x(?!y)/;    //match x only if not followed by y




//String to match
const str = '';


//log results
const result = re.exec(str);
console.log(result);

function reTest(re , str) {
	if(re.test(str)) {
		console.log(`${str} matches ${re.source}`);
	} else {
		console.log(`${str} does not match ${re.source}`);
	}
}

reTest(re , str);