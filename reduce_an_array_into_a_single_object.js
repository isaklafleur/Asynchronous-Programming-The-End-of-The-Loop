var votes = [
    'angular',
    'angular',
    'react',
    'angular',
    'vanilla',
    'react',
    'ember',
    'react'
];

var initialValue = {};

var reducer = function(tally, vote) {
    if(!tally[vote]) {
        tally[vote] = 1;
    } else {
        tally[vote] = tally[vote] + 1;
    }

    return tally;
};

var result = votes.reduce(reducer, initialValue);

console.log(result);