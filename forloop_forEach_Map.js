function getStockSymbols(stocks) {
    return stocks.map(function(stock) {
        return stock.symbol;
    });
}

/*
var symbols = [],
    stock;
*/

/*
// FOREACH LOOP asynchronous loop
stocks.forEach(function(stock) {
    symbols.push(stock.symbol);
});
*/

/*
// FOR LOOP

for(var i = 0; i < stocks.length; i++) {
    stock = stocks[i];
    symbols.push(stock.symbol);
}

return symbols;
}
*/

var symbols = getStockSymbols([
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 },
    { symbol: "JXJ", price: 120.22, volume: 5323 }
]);

console.log(JSON.stringify(symbols));
