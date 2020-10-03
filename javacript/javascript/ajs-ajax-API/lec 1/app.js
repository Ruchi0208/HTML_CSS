//fetching data from local text file
document.getElementById('button').addEventListener('click',
	localData);

function localData() {

	//create an XHR object
	const xhr = new XMLHttpRequest();

	//OPEN : 'true' is for asynchronous , 'GET' : type of request
	xhr.open('GET' , 'data.txt' , true);

	// console.log('READYSTATE' , xhr.readyState); //readystate 1

	//OPTIONAL - used for spinners/loaders
	xhr.onprogress = function(){
		console.log('READYSTATE' , xhr.readyState); //readystate 3
	}

	//ONLOAD : what we have to do with the data
	xhr.onload = function(){
		console.log('READYSTATE' , xhr.readyState); //4
		//this refers to xhr object
		if(this.status === 200){
			//if its 200(known as http status) then everything is okay everything is loaded successfully
			console.log(this.responseText);
			//response text is getting text in txt file

			document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
		}
	}

	// xhr.onreadystatechange = function() {
	// 	console.log('READYSTATE' , xhr.readyState); //1 , 2 , 3, 4
	// 	if(this.status === 200 && this.readyState === 4){
	// 		console.log(this.responseText);
	// 	}
	// }

	//ONERROR:if something goes wrong or error
	xhr.onerror = function() {
		console.log('Request error ... ')
	}

	//SEND: to finalise everything
	xhr.send();

	//readyState Values;;
	//0 : request not initialized
	//1 : server connection established
	//2 : request received
	//3 : processing request
	//4 : request finished and response is ready

	//HTTP Statuses ::
	//200 : "OK"
	//403 : "forbidden"
	//404 : "Not Found"

}