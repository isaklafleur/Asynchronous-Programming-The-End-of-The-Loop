var data = [15, 3, 20];
// accumulator is always the previous returned accumulated value,
// item is the current value 
var reducer = function(accumulator, item) {
    return accumulator + item;
}

var initialValue = 0;

var total = data.reduce(reducer, initialValue);

console.log("The sum is:", total);