// Nested Arrays - An array of an Array
var exchanges = [
    [ // stock records for DOW
        { symbol: "XFX", price: 240.22, volume: 23432 },
        { symbol: "TNZ", price: 332.19, volume: 234 },
    ],
    [ // stock records for NASDAQ
        { symbol: "JXJ", price: 120.22, volume: 5323 },
        { symbol: "NYN", price: 88.47, volume: 98275 }   
    ]
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

var stocks = exchanges.concatAll();

stocks.forEach(function(stock) {
    console.log(JSON.stringify(stock));
});

/*
exchanges.forEach(function(exchange) {
    exchange.forEach(function(stock) {
        console.log(JSON.stringify(stock));
    });
});
*/