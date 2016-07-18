function Modal () {
    this.backGroundpBlock = document.querySelector('.val-modal-login-reg-outer');
    this.headerBlock = document.querySelector('.val-header-outer-block');
    this.closeButton = document.querySelectorAll('val-close-modals');
    this.clickEvent();
    //this.loginDiv = document.querySelector('.-login-modal');
    //this.registrationDiv = document.querySelector('.-reg-modal');

}

Modal.prototype = Object.create(App.prototype);
Modal.prototype.constructor = Modal;

Modal.prototype.clickEvent = function () {

    this.headerBlock.addEventListener('click', this.popUpFunc.bind(this));
}

Modal.prototype.popUpFunc = function (event) {

    var event = event || window.event,
        eventAttribute = event.target.getAttribute('data-attr');
    if(!eventAttribute) {
        return;
    }else{
        //show the window
        this.activateOuter();
        this.popUpWindow(eventAttribute);
    }
}

Modal.prototype.popUpWindow = function (windowClass) {
    var divLogin = document.querySelector('.' + windowClass);

    divLogin.classList.add('-animate-content-window');
    divLogin.style.display = 'block';

    //closing window animation
    divLogin.addEventListener('click', this.closeWindow.bind(this));
}

//!!!The close function is need to be done
Modal.prototype.closeWindow = function (event) {
    var event = event || window.event;
    if(event.target.classList.contains('val-close-modals')){
        this.disActivateOuter();
    }
}

Modal.prototype.closingAnimation = function () {
    //adding animation class to animation
    this.backGroundpBlock.classList.add('-active-outer');
}

Modal.prototype. = function () {
    var that = this;

    //adding animation to disable active status
    this.backGroundpBlock.classList.add('-active-outer-out');
    //deleting all animation classes
    setTimeout(function(){
        that.backGroundpBlock.classList.remove('-active-outer', '-active-outer-out');
    }, 800);
}

Modal.prototype.showWindow = function () {

}








//
//
//Modal.prototype.toggleOuterBackground = function (boolean) {
//    this.backGroundpBlock.classList.toggle('-active-outer', boolean);
//    console.log('work');
//}
//Modal.prototype.displayBlock = function (boolean, divElement) {
//    if(boolean){
//        divElement.classList.remove('-animate-content-window-close');
//        divElement.classList.add('-animate-content-window');
//        divElement.style.display = 'block';
//    }else{
//        divElement.classList.remove('-animate-content-window');
//        divElement.classList.add('-animate-content-window-close');
//        divElement.style.display = 'none';
//    }
//
//}

//Modal.prototype.formToShow = function (formID) {
//    var loginForm = document.getElementById('login'),
//        rememeberForm = document.getElementById('remember');
//
//    if(formID == 'login'){
//        loginForm.style.display = 'block';
//        rememeberForm.style.display = 'none';
//    }else if(formID == 'remember'){
//        rememeberForm.style.display = 'block';
//        loginForm.style.display = 'none';
//    }
//}

//Modal.prototype.regEvent = function () {
//    this.toggleOuterBackground(true);
//    this.displayBlock(true, this.registrationDiv);
//}


//Modal.prototype.closeOrRemember = function (event) {
//    var event = event || window.event;
//        linkToShowRemForm = document.querySelectorAll('.-val-remember-pass')[0],
//        linkBackLoginForm = document.querySelectorAll('.-val-remember-pass')[1];
//
//    if(event.target.classList.contains('val-close-modals')){
//        this.displayBlock(false, this.loginDiv);
//        this.toggleOuterBackground(false);
//        this.formToShow('login');
//    }else if(event.target == linkToShowRemForm){
//        this.formToShow('remember');
//    }else if(event.target == linkBackLoginForm){
//        this.formToShow('login');
//    };
//}

//test function
//Modal.prototype.foo = function (){
//    console.log(this.popUpBlock);
//    console.log(this.buttonsBlock);
//}
