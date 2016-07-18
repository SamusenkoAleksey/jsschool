function Currency () {
    this.listOfNeededBanks = ["ПриватБанк", "ПУМБ", "Укрсоцбанк", "Індустріалбанк"];
    this.getData('http://user110.js.uitclassroom.com/site/tryCurrency');
}

Currency.prototype = Object.create(App.prototype);
Currency.prototype.constructor = Currency;

Currency.prototype.getData = function (url) {
    this.Ajax(url, this.getlistOfAllBanks, this);
}



Currency.prototype.getlistOfAllBanks = function (result, self) {
   var nameOfBank = '',
       arr = [],
       stay;
    for (var i = 0 ; i < result.length ; i++){
        if(nameOfBank != result[i].bankName){
            if(stay && self.listOfNeededBanks.indexOf(stay.bankName) != -1){
                arr.push(stay);
            };
            stay = {};
            stay.bankName = result[i].bankName;
            stay[result[i].codeAlpha] = {
                rateBuy: result[i].rateBuy,
                rateSale: result[i].rateSale
            };
        }
        else{
            stay[result[i].codeAlpha] = {
                rateBuy: result[i].rateBuy,
                rateSale: result[i].rateSale
            };
        };
        nameOfBank = result[i].bankName;
    };
    
    self.createHtmlElement(arr);
}

Currency.prototype.createHtmlElement = function (arrayOfObjects) {
    var currencyDiv = document.querySelector('.-currency-val'),
        stringToInsert = '<table class="-new-currensy">'
                            + '<tr>'
                                + '<th>'
                                    + '<span>Банк</span>'
                                + '</th>'
                                + '<th>'
                                    + '<span style="font-size: 18px"> &#402;</span>'
                                + '</th>'
                                + '<th>'
                                    + '<span>Покупка</span>'
                                + '</th>'
                                + '<th>'
                                    + '<span>Продажа</span>'
                                + '</th>'
                            + '</tr>'
                            + this.createCurrentValue(arrayOfObjects)
                        + '</table>';

    currencyDiv.insertAdjacentHTML('afterBegin', stringToInsert);
}

Currency.prototype.createCurrentValue = function (array) {
    stringOfBanks = '';
    for(var i = 0 ; i < array.length ; i++ ){
        stringOfBanks += '<tr>'
                            + '<td>'
                                + '<p><i>' + array[i].bankName + '</i></p>'
                            + '</td>'
                            + '<td>'
                                + '<span>'
                                    + '<b>&euro;</b>'
                                + '</span>'
                                + '<span>'
                                    + '<b>$</b>'
                                + '</span>'
                                + '<span>'
                                    + '<b>R</b>'
                                + '</span>'
                            + '</td>'
                            + '<td>'
                                + '<span>'
                                    + array[i].EUR.rateBuy
                                + '</span>'
                                + '<span>'
                                    + array[i].USD.rateBuy
                                + '</span>'
                                + '<span>'
                                     + array[i].RUB.rateBuy
                                + '</span>'
                            + '</td>'
                            + '<td>'
                                + '<span>'
                                    + array[i].EUR.rateSale
                                + '</span>'
                                + '<span>'
                                    + array[i].USD.rateSale
                                + '</span>'
                                + '<span>'
                                    + array[i].RUB.rateSale
                                + '</span>'
                            + '</td>'
                        + '</tr>';
    };
    return stringOfBanks;
}

