function Helper () {

};
 
Helper.prototype.currentDate = function () {
	var today = new Date(),
		todayYearMonthDay = (new Date(today.getFullYear(), today.getMonth(), today.getDate())).valueOf();

		return todayYearMonthDay;
};

Helper.prototype.returnDate = function (date, language) {
	var now = this.currentDate(),
		splittedTime = date.split(' '),
		imputDate = new Date(date),
		imputeYearMonthDay = (new Date(imputDate.getFullYear(), imputDate.getMonth(), imputDate.getDate())).valueOf();
	if(now == imputeYearMonthDay){
		return "Сегодня " + splittedTime[1].slice(0,-3);
	}else{
		return imputDate.getDate() + ' ' + this.getMonth(language, imputDate.getMonth()) + ' ' + imputDate.getFullYear() ;
	}
};

Helper.prototype.getMonth = function (language, month) {
	var mounthObject = {
		ru: {
			0: 'Января',
            1: 'Февраля',
            2: 'Марта',
	        3: 'Апреля',
			4: 'Мая',
			5: 'Июня',
			6: 'Июля',
			7: 'Августа',
			8: 'Сентября',
			9: 'Октября',
			10: 'Ноября',
			11: 'Декабря'
		},
		uk: {
			0: "Січня",
			1: "Лютого",
			2: "Березня",
			3: "Квітня",
			4: "Травня",
			5: "Червня",
			6: "Липня",
			7: "Серпня",
			8: "Вересня",
			9: "Жовтня",
			10: "Листопада",
			11: "Грудня"
	    }
	};
	
	return mounthObject[language][month];

};

Helper.prototype.Ajax = function (url, callback, self) {
	if(XMLHttpRequest == 'undefined'){
		return alert('Your browser do not support Ajax!');
	};

	var	xhr = new XMLHttpRequest();

	xhr.open('GET', url, true);
	xhr.onreadystatechange = function () {
		if(xhr.readyState == 4 && xhr.status == 200){
			var str = xhr.responseText,
				receivedObj = JSON.parse(str);
				callback(receivedObj, self);
		};
	}
	xhr.send();

};


Helper.prototype.findTheKey = function (obj, key, callback, self) {
	for (var i in obj){
        if(i == key){
                callback(obj[key], self);
            }else if(typeof obj[i] == 'object'){
                self.findTheKey(obj[i], key, callback, self);
         };
    };
}



