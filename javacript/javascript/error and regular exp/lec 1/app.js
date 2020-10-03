const user = {email: 'jdoe@gmail.com'};


try {
	//produce a ReferenceError
	// myFunction();

	//Produce a TypeError
	// null.myFunction();

	//eval func
	//console.log(eval('2+2'));

	//will produce syntaxError
	// eval('Hello');

	//will produce a URIError
	// decodeURIComponent('%');

	if(!user.name) {
		// throw 'User has no name';
		throw new syntaxError('User has no name');
	}


} catch(err) {
	//runs when an error occurs

	console.log(`User Error : ${e.message}`);
	
	console.log(e);
	// console.log(err.message);
	// console.log(err.name);
	// console.log(err instanceof TypeError);

} finally {
	//it will run even if error occurs or not
	console.log('Finally runs regardless of result...');
}

//we can handle error without stopping entire script if we use try catch
console.log('Program continues....');

//if we do it like below it will give erro and not continue script
// myFunction();
// console.log('Program continues');