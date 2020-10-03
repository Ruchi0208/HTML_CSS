//Init storage object
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

//Init weather objct
const weather = new Weather(weatherLocation.city , weatherLocation.state);

//init ui object
const ui = new UI();

//Get weather on DOM load
document.addEventListener('DOMContentLoaded' , getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click' , (e) => {
	const city = document.getElementById('city').value;
	const state = document.getElementById('state').value;


	//change location
	weather.changeLocation(city , state);

	//set location in LS
	storage.setLocationData(city , state);

	//get and display weather
	getWeather();

	//Close modal:jQuery
	$('#locModal').modal('hide');

});



function getWeather() {
	weather.getWeather()
		.then(results => {
			ui.paint(results);
		})
		.catch(err => console.log(err));
}