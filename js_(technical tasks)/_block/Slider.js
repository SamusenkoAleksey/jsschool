function Slider(div) {
	if(!div){
		return;
	}
	this.div = div;
	this.widthOfDiv = this.div.clientWidth;
	this.createDataSlide();
	this.clickEvent();
	this.setActiveElement(this.controlsDiv.children[0]);
}

Slider.prototype = Object.create(App.prototype);
Slider.prototype.constructor = Slider;



Slider.prototype.listOfSlides = document.querySelector('.val-list-slider');
Slider.prototype.controlsDiv = document.querySelector('.val-display-controls');

Slider.prototype.createDataSlide = function () {
	var value = 1,
		stringDataControls = '';
		
	for (var i = 0; i < this.listOfSlides.children.length ; i++){

		this.listOfSlides.children[i].setAttribute('data-slide', value);

		stringDataControls += '<span data-controls=\'' + value + '\'></span>';
		value ++;
	};

	this.controlsDiv.insertAdjacentHTML('afterBegin', stringDataControls);
}


Slider.prototype.setActiveElement = function (element) {
	var otherActiveElement = document.querySelector('.-active-slide');
	
	if(element.classList.contains('-active-slide')){
		return;
	}else if (otherActiveElement){
		otherActiveElement.classList.remove('-active-slide');
	}
	
	element.classList.add('-active-slide');
}


Slider.prototype.moveSlider = function (value) {

	this.listOfSlides.style.cssText = 'transform: translateX(' + '-' + this.widthOfDiv * (value - 1) + 'px); transition:' + 1.5 +'s;';
}


Slider.prototype.clickEvent = function () {
	var that = this;
	that.controlsDiv.addEventListener('click', goToSlide);

	
	function goToSlide (e) {
		var target = e && e.target || e.srcElement;
		if(target.hasAttribute('data-controls')){
            that.setActiveElement(target);
			that.moveSlider(target.getAttribute('data-controls'));
		};
	}
}


