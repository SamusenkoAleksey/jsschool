function Weather() {

}

Weather.prototype = Object.create(App.prototype);
Weather.prototype.constructor = Weather;

var siteURL = 'https://query.yahooapis.com/v1/public/yql?q=select%20item%20from%20weather.forecast%20where%20woeid%3D918233%20and%20u%3D%22c%22&format=json&l=ru';

//Weather.prototype.Ajax(siteURL, 'item');

var currentWeather = new Weather();

console.log(currentWeather.Ajax(siteURL, 'lang'));



















// var xhr = new XMLHttpRequest();

// 	xhr.open('GET', siteURL, true);
// 	xhr.onreadystatechange = function () {
// 		if(xhr.readyState == 4 && xhr.status == 200){
// 			var str = xhr.responseText;

// 			var pobj  = JSON.parse(str);
// 			console.log(pobj);
// 		}
// 	}
// 	xhr.send();




// var getJSON = function(url, successHandler, errorHandler) {
//                 if (typeof XMLHttpRequest == 'undefined') {
//                     return notSupported();
//                 }
//                 var xhr = new XMLHttpRequest();
//                 xhr.open('get', url, true);
//                 xhr.responseType = 'json';
//                 xhr.onload = function() {
//                     var status = xhr.status;
//                     if (status === 200) {
//                         successHandler(xhr.response);
//                     } else {
//                         errorHandler(status);
//                     }
//                 };
//                 xhr.send();
//             };

//             getJSON('http://ip-api.com/json', function (data) {
//                 if (typeof data == 'string') {
//                     notSupported();
//                 } else {
//                     console.log(data);
//                     supported();
//                     alert('Ваш IP: ' + data.query);
//                 }
//             }, function () {
//                 notSupported();
//             });


