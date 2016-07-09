function Categories() {
    this.totalPageHeight = document.body.clientHeight;
    //statusLoad is used to track if the category is loaded
    this.statusLoad = false;
    this.categoryLoader();
    this.id = 1;
}

Categories.prototype = Object.create(App.prototype);
Categories.prototype.constructor = Categories;


Categories.prototype.categoryLoader = function () {
    var that = this;
    document.addEventListener('scroll', foo);

    function foo () {

        var tippingPoint = that.totalPageHeight - 300,
            currentScrollingY = window.scrollY + window.innerHeight;
        
        if (currentScrollingY > tippingPoint  && that.statusLoad === false){
            that.statusLoad = true;
            that.Ajax('http://user110.js.uitclassroom.com/site/GetCategory?id=' + that.id , that.createHtmlElem, that);

        };
    }
}

Categories.prototype.getNewsHtml = function (arr, lang) {
    var stringToAppend = '';
    for(var i = 0 ; i < arr.length; i ++){
        //Teamplete with image
        stringToAppend += '<a href=\'/site/news/' + arr[i].id + '\' class=\'val-news-item-category val-category-image\'>'
                            + '<div class="val-item-outer-category-image">'
                                + '<img src=\'/uploads/news/thumb/' + arr[i].image + '\' alt="' + arr[i]['title_' + lang] + '">'
                            + '</div>'
                            + '<div class="val-line-vews-data">'
                                + '<span class="val-content-news-data">' + arr[i].date + '</span>'
                                + '<span class="val-news-view">' + arr[i].views + '</span>'
                            + '</div>'
                            + '<h2 class="val-title-news-category">' + arr[i]['title_' + lang] + '</h2>'
                        + '</a>';
        // Template without image
        //stringToAppend += '<a href=\'/site/news/' + arr[i].id + '\' class=\'val-news-item-category val-category-image\'>'
        //                    + '<div class="val-line-vews-data">'
        //                         + '<span class="val-content-news-data">' + arr[i].date + '</span>'
        //                         + '<span class="val-news-view">' + arr[i].views + '</span>'
        //                    + '</div>'
        //                        + '<h2 class="val-title-news-category">' + arr[i]['title_' + lang] + '</h2>'
        //                        + '<p class="val-description-news-category">' + arr[i]['description_' + lang].substr(0, 250) + '</p>'
        //                + '</a>';
    }
    return stringToAppend;
}

Categories.prototype.createHtmlElem = function (object, self) {


    var language = object.language,
        news = JSON.parse(object.news),
        category = JSON.parse(object.category);

    var categoryBlock = document.querySelector('.val-full-width-category'),
        divToinsert = '<div class="val-category-block">'
                        + '<h2 class="val-title-uppercase-with-line">'
                            + category[0]['name_' + language]
                        + '</h2>'
                        + '<div class="val-news-list-category">'
                            + self.getNewsHtml(news, language)
                        + '</div>'
                    + '</div>';

    categoryBlock.insertAdjacentHTML('beforeEnd', divToinsert);
    self.statusLoad = false;

    if(self.id == 6){
        self.id = 8;
    }else{
        self.id ++;
    }
}

new Categories();

