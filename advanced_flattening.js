var exchanges = [
    {
        name: 'NYSE',
        stocks: [
            {
                symbol: 'XFX',
                closes: [
                    { date: new Date(2014,11,24), price: 240.10 },
                    { date: new Date(2014,11,23), price: 230.10 },
                    { date: new Date(2014,11,22), price: 240.10 },
                ]
            },
            {
                symbol: 'TNZ',
                closes: [
                    { date: new Date(2014,11,24), price: 240.10 },
                    { date: new Date(2014,11,23), price: 230.10 },
                    { date: new Date(2014,11,22), price: 240.10 },
                ]
            },
            {
                symbol: 'NYN',
                closes: [
                    { date: new Date(2014,11,24), price: 240.10 },
                    { date: new Date(2014,11,23), price: 230.10 },
                    { date: new Date(2014,11,22), price: 240.10 },
                ]
            },
        ]
    }
];

// creating the customs concatAll method
Array.prototype.concatAll = function() {
    var results = [];

    this.forEach(function(subArray) {
        subArray.forEach(function(item) {
            results.push(item);
        });
    });

    return results;
};
// [1,2,3].map(function(num) { return num + 1; }) --> [2,3,4]
// [1,2].map(function(num) { return [num + 1, num + 2]; }) --> [[2,3], [3,4]]

// as it exist three map expressions, we will end up with a three dimensional array.
var christmasEveCloses =
exchanges.map(function(exchange) {
    return exchange.stocks.map(function(stock) {
        return stock.closes.filter(function(close) {
            return close.date.getMonth() === 11 && close.date.getDate() === 24;}).map(function(close) {
                return {
                    symbol: stock.symbol,
                    price: close.price
                };
            });
        }).concatAll();
    }).concatAll();

christmasEveCloses.forEach(function(christmasEveClose) {
    console.log(christmasEveClose);
});