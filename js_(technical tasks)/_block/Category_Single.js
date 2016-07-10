function CategorySingle (input) {
    if(input === null){
        return;
    }
    this.input = input;
    this.dataId = this.input.getAttribute('data-id');
    this.dataOffset = this.input.getAttribute('data-count');
    this.statusLoad = false;
    this.newsLoader();
}

CategorySingle.prototype = Object.create(App.prototype);
CategorySingle.prototype.constructor = CategorySingle;


CategorySingle.prototype.newsLoader = function () {
    var that = this,
        buttons = document.querySelector('.val-menu-list');


    window.addEventListener('load', startLoading);

    function startLoading () {
        that.Ajax('http://user110.js.uitclassroom.com/site/GetCategoryByIdXhrOrNotId?id=' + that.dataId + '&offset=' + that.dataOffset, that.getValue, that);
    }

    window.addEventListener('scroll', continuteLoading);

    function continuteLoading () {
    console.log('wwa');
        var totalPageHeight = document.body.clientHeight,
            tippingPoint = totalPageHeight - 100,
            currentScrollingY = window.scrollY + window.innerHeight;

        if(currentScrollingY > tippingPoint  && that.statusLoad === false) {
            console.log('wwaasdf');
            that.Ajax('http://user110.js.uitclassroom.com/site/GetCategoryByIdXhrOrNotId?id=' + that.dataId + '&offset=' + that.dataOffset, that.getValue, that);

        }
    }
}

CategorySingle.prototype.getValue = function (value, self) {
    if(value === null || value === undefined){
        return;
    }
    var categoryDiv = document.getElementById('val-single-category'),
        language = value.language,
        offset = value.offset,
        news = JSON.parse(value.news);

    self.dataOffset = offset;
    self.statusLoad = true;
    categoryDiv.insertAdjacentHTML('beforeEnd', self.createHtmlElement(language, news), self);
    self.statusLoad = false;
}

CategorySingle.prototype.createHtmlElement = function (lang, arr, self) {
    var string = '';

    for(var i = 0 ; i < arr.length ; i++ ){
        string += '<a href="/site/news/' + arr[i].id + '" class="val-block-gen-news">'
                    + '<div class="val-image-block-gen-news">'
                        + '<img src="/uploads/news/thumb/' + arr[i].image + '">'
                    + '</div>'
                    + '<div class="val-description-block-gen-news">'
                        + '<span class="val-news-view">' + arr[i].views + '</span>'
                        + '<span class="val-content-news-data">' + arr[i].date + '</span>'
                        + '<h3 class="val-content-news-title-small">' + arr[i]['title_' + lang] + '</h3>'
                    + '</div>'
                + '</a>';
    }

    return string;
}



new CategorySingle(document.getElementById('val-count-and-id'));