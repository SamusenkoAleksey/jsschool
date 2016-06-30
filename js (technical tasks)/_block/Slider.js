function Slider(div) {
	if(!div){
		return;
	}
	this.div = div;
	this.createDataSlide();
	this.createLinks();
	this.clickEvent();
}

Slider.prototype = Object.create(App.prototype);
Slider.prototype.constructor = Slider;

Slider.prototype.controlsDiv = document.querySelector('.val-display-controls');

Slider.prototype.getListOfSlides = function () {
	return document.querySelector('.val-list-slider').children;
}

Slider.prototype.createDataSlide = function () {
	var num = 1;
		
	for (var i = 0; i < this.getListOfSlides().length ; i++){
		this.getListOfSlides()[i].setAttribute('data-slide', num);
		num ++;
	};

}


Slider.prototype.createLinks = function () {
		str = '',
		num = 1;
		
	for(var i = 0; i < this.getListOfSlides().length ; i++ ){
		str += '<span data-controls=\'' + num + '\'></span>';
		num ++; 
	};

	this.controlsDiv.insertAdjacentHTML('afterBegin', str); 

}

Slider.prototype.clickEvent = function () {
	this.controlsDiv.addEventListener('click', goToSlide);

	var that = this;
	function goToSlide (e) {
		var target = e && e.target || e.srcElement;
		if(target.hasAttribute('data-controls')){
			//console.log(target);
			that.addActiveStatus(target);
		}
	}
}


Slider.prototype.addActiveStatus = function (element) {
	if(element.classList.contains('-active-slide')){
		return;
	}else{
		var activeElement = document.querySelector('.-active-slide');
			activeElement.classList.remove('-active-slide');

			element.classList.add('-active-slide');
	}
}


new Slider (document.querySelector('.val-slider-general-news'));


