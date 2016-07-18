function App() {
    this.init()
};

App.prototype = Object.create(Helper.prototype);
App.prototype.constructor = App;


App.prototype.init = function(){
    new Slider (document.querySelector('.val-slider-general-news'));
    new Weather();
    new Categories();
    new Currency();
    new CreateIframes (document.querySelector('.val-iframe-streams'));
    new Modal();
}

window.addEventListener('DOMContentLoaded', function(){
    new App();
})