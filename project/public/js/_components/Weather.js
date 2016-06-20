function Weather() {
	this.getData('https://query.yahooapis.com/v1/public/yql?q=select %20item%20from%20weather.forecast%20where%20woeid%3D918233%20and%20u %3D%22c%22&format=json&l=ru');
}
  
Weather.prototype = Object.create(App.prototype);
Weather.prototype.constructor = Weather;

Weather.prototype.getData = function (url) {
	this.Ajax(url, this.getEachObject, this);
}

Weather.prototype.getEachObject = function (result, self) {
	self.findTheKey(result, 'item', self.getResult, self);
}

Weather.prototype.getResult = function(result, self){
	// var outerForWeather = document.querySelector('.outer-for-weather');
	console.log(result)
}


// Weather.prototype.insertWeatherButton = function (obj, elementToInsert ) {
// 	var divHtml = '<div class="drop-weather-button">'
// 				+ '</div>';

// 	elementToInsert.insertAdjacentHTML('afterBegin', divHtml);			
// }

new Weather();
