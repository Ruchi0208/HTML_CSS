//fetching data from external api using ajax
//external(text which is not in the system lyk in previous we had data.txt etc)
document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e) {
	const number = document.querySelector('input[type="number"]').value;

	const xhr = new XMLHttpRequest();

	xhr.open('GET' , `http://api.icndb.com/jokes/random/${number}` , true);

	xhr.onload = function() {
		if(this.status === 200) {
			const response = JSON.parse(this.responseText);

			let output = '';

			if(response.type === 'success'){
				//since the api is formatted st the jokes are in values we have to loop through it so it depends on the api
				response.value.forEach(function(joke){
					output += `<li>${joke.joke}</li>`;
				});

			} else {
				output += '<li>Something went wrong</li>'
			}

			document.querySelector('.jokes').innerHTML = output;
		}
	}

	xhr.send();

	e.preventDefault();
}