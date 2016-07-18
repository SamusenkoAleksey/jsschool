function CategorySingle (input) {
    if(input === null){
        return;
    }
    this.input = input;
    this.dataId = this.input.getAttribute('data-id');
    this.dataOffset = parseInt(this.input.getAttribute('data-count'));
    this.statusLoad = true;
    this.newsLoader();
}

CategorySingle.prototype = Object.create(App.prototype);
CategorySingle.prototype.constructor = CategorySingle;


CategorySingle.prototype.newsLoader = function () {

    this.sendAjax();
    window.addEventListener('scroll', this.scrollingLoading.bind(this));

}

CategorySingle.prototype.scrollingLoading = function () {
    var tippingPoint = document.body.clientHeight - document.body.scrollTop;

    if (tippingPoint < 1500 && this.statusLoad === true){
        this.sendAjax();
    }
}

CategorySingle.prototype.sendAjax = function () {
    var url = 'http://user110.js.uitclassroom.com/site/GetCategoryByIdXhrOrNotId?id=' + this.dataId + '&offset=' + this.dataOffset;
    this.statusLoad = false;
    this.Ajax(url, this.getValue, this);
}

CategorySingle.prototype.getValue = function (value, self) {
    if(value === null || value === undefined){
        return;
    }
    var categoryDiv = document.getElementById('val-single-category'),
        language = value.language,
        currentOffset = parseInt(value.offset),
        news = JSON.parse(value.news);

    

    categoryDiv.insertAdjacentHTML('beforeEnd', self.createHtmlElement(language, news) );
    self.dataOffset = currentOffset;
    self.statusLoad = true;
}

CategorySingle.prototype.createHtmlElement = function (lang, arr) {
    var string = '';

    for(var i = 0 ; i < arr.length ; i++ ){
        string += '<a href="/site/news/' + arr[i].id + '" class="val-block-gen-news">'
                    + '<div class="val-image-block-gen-news">'
                        + '<img src="/uploads/news/thumb/' + arr[i].image + '">'
                    + '</div>'
                    + '<div class="val-description-block-gen-news">'
                        + '<span class="val-news-view">' + arr[i].views + '</span>'
                        //+ '<span class="val-content-news-data">' + arr[i].date + '</span>'
                        + '<span class="val-content-news-data">' + this.returnDate(arr[i].date, lang) + '</span>'
                        + '<h3 class="val-content-news-title-small">' + arr[i]['title_' + lang] + '</h3>'
                    + '</div>'
                + '</a>';
    }

    return string;
}

new CategorySingle(document.getElementById('val-count-and-id'));