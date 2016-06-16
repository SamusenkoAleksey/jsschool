// function CreateIframes (div) {
//     if(!div){return};
//     this.div = div;
// }



// CreateIframes.prototype.getIframes = function () {
//     var links = this.div.getAttribute('data-src').split(',');
//     var str = '';
//     for (var i = 0 ; i < links.length ; i++ ){
//         str += '<div class="val-outer-frame">' + 
//                     '<span class="vol-ico-online">' + 
//                         '<i class="online"></i>' + 
//                     '</span>' + 
//                     '<iframe src="' + links[i] + '"></iframe>' + 
//                 '</div>';     
//     };  
//     return str;
// }

// CreateIframes.prototype.appendIframes = function () {
//     this.div.insertAdjacentHTML('afterBegin', this.getIframes());
// }


// var divBloc = document.querySelector('.val-iframe-streams');

// var showIframes = new CreateIframes(divBloc);

// showIframes.appendIframes();
