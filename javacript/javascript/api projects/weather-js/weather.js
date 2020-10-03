class Weather {
	constructor(city , state) {
		this.apiKey = '4e1887c1ec53dadddf7ff60234407b66';
		this.city = city;
		this.state =state;
	}

	//Fetch weather from api:async return promises
	async getWeather() {
		const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

		const responseData =await response.json();

		return responseData.current_observation;
	}

	//Change weather location
	changeLocation(city,state) {
		this.city=city;
		this.state=state;
	}
}