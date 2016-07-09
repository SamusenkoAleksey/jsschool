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
	var outerForWeather = document.querySelector('.outer-for-weather');
	self.insertWetherHTML(result,outerForWeather);
}


Weather.prototype.insertWetherHTML = function (obj ,elementToInsert) {
	var div = '<div class="drop-weather-button">'
					+ '<div class="outer-today-ico">' 
							+ '<span class="icons-for-c-min icon-weather-min-' + obj.condition.code + '"></span>'
							+ '<i class="today-weather">' + obj.condition.temp + ' С°</i>'
					+ '</div>'
					+ '<div class="drop-wether">'
						+ '<p class="for-genwether">'
							+ '<span class="title-weather">Погода</span>'
							+ '<span class="city-weather">Украина, Чернигов</span>'
						+ '</p>'
						+ '<div class="section-today">'
							+ '<div class="for-weather-icon">'
								+ '<h5 class="section-heading">Сьогодні</h5>'
								+ '<span class="icons-for-c icon-weather-' + obj.condition.code + '"></span>'
							+ '</div>'
							+ '<div class="weather-detail">'
								+ '<h4 class="weather-heading">'
									+ '<span class="temp-now">' + obj.condition.temp + ' С° </span>'  
									+ '<span class="phrase">Температура зараз</span>'
								+ '</h4>'
								+ '<span class="temperature high-temperature">' + obj.forecast[0].high + ' С° </span>'
								+ '&nbsp; - &nbsp;'
								+ '<span class="temperature low-temperature">' + obj.forecast[0].low + ' С° </span>'
								+ '<p class="summary">' + this.returnDescription(obj.condition.code) + '</p>'
							+ '</div>'
						+ '</div>'
						+'<div class="section-this-week">'
							+ '<h5 class="section-heading">Тиждень</h5>'
								+ '<ul class="item-list-temperature">'
									+ this.daysForecast(obj.forecast) 
								+ '</ul>'
						+ '</div>'
					+ '</div>' 
				+ '</div>';

	elementToInsert.insertAdjacentHTML('afterBegin', div);			
}


Weather.prototype.returnDescription = function (descriptionCode) {
	var description = {
		0: 'Торнадо',
		1: 'Тропічний шторм',
		2: 'Ураган',
		3: 'Сильні грози',
		4: 'Грози',
		5: 'Змішаний дощ зi снігом', 6: 'Змішаний дощ зi снігом', 7: 'Змішаний дощ зi снігом', 8: 'Паморозь',
		9: 'Мряка',
		10: 'Град',
		11: 'Зливи',
		12: 'Зливи',
		13: 'Сніговi пориви',
		14: 'Легкий сніг',
		15: 'Хуртовина',
		16: 'Снiг',
		17: 'Град',
		18: 'Дощ зі снігом',
		19: 'Туманно',
		20: 'Туманно',
		21: 'Туманно',
		22: 'Туманно',
		23: 'Вітрянно',
		24: 'Вітрянно',
		25: 'Прохолодно',
		26: 'Хмарно',
		27: 'Переважно хмарно',
		28: 'Переважно хмарно',
		29: 'Мінлива хмарність',
		30: 'Мінлива хмарність',
		31: 'Ясно',
		32: 'Сонячно',
		33: 'Ясно',
		34: 'Ясно',
		35: 'Змішаний дощ з градом', 36: 'Спекотно',
		37: 'Грози',
		38: 'Розсіяні грози',
		39: 'Розсіяні грози',
		40: 'Мінлива хмарність',
		41: 'Сильний снігопад',
		42: 'Снігопад',
		43: 'Сильний снігопад',
		44: 'Мінлива хмарність',
		45: 'Зливи',
		46: 'Зливовий сніг',
		47: 'Зливи'
	};

	return description[descriptionCode];

}

Weather.prototype.returnDay = function (dayCode){
	var days = {
		Mon: 'Понедiлок',
		Tue: 'Вiвторок', 
		Wed: 'Середа', 
		Thu: 'Четвер', 
		Fri: 'П`ятниця', 
		Sat: 'Субота', 
		Sun: 'Недiл;я'
	};
	return days[dayCode];
}

Weather.prototype.daysForecast = function (arrayOfDays){
		
		var listOfDays = '';

		for (var i = 1; i <= 4 ; i ++ ){

			listOfDays += '<li class="item-time-temperature">'
					+ '<span class="icons-for-c icon-weather-' + arrayOfDays[i].code +'"></span>'
					+ '<span class="day">' + this.returnDay(arrayOfDays[i].day) + '</span>'
					+ '<span class="temperature-days high-temperature">' + arrayOfDays[i].high + 'С°</span>'
					
					+ '-'
					+ '<span class="temperature-days low-temperature">' + arrayOfDays[i].low + 'С°</span>'
				+ '</li>';
		}
		
		return listOfDays;
}

new Weather();
