var data = [1,2,3,4,5];

// reduce 
var doubled = data.reduce(function(acc, value) {
    acc.push(value * 2);

    return acc;
}, []);

// map

var doubleMapped = data.map(function(num) {
    return num * 2;
});

// Print out only even numbers of the array with reduce
var data2 = [1, 2, 3, 4, 5, 6];

var evens = data2.reduce(function(acc, value) {
    if (value % 2 === 0) {
        acc.push(value);
    }

    return acc;
}, []);

var evensFiltered = data2.filter(function(item) {
    return (item % 2 === 0);
})

var filterMapped = data2.filter(function(value) {
    return value % 2 === 0;
}).map(function(value) {
    return value * 2;
});

// What happens if we use a big data set? What method should we choose then?
var bigData = [];
for (var i = 0; i < 10000000; i++) {
    bigData[i] = i;
}

console.time('bigData');
var filterMappedBigData = bigData.filter(function(value) {
    return value % 2 === 0;
}).map(function(value) {
    return value * 2;
});
console.timeEnd('bigData');

console.time('bigDataReduce');
var reducedBigData =bigData.reduce(function(acc, value) {
    if (value % 2 === 0) {
        acc.push(value * 2);
    }
    return acc;
}, [])
console.timeEnd('bigDataReduce');

/*
console.log('My doubled data (reduce):', doubled);
console.log('My doubled data (map):', doubleMapped);
console.log('My evens data (reduce):', evens);
console.log('My evens data (filter):', evensFiltered);
console.log('My evens data and multiply with 2 (chaining filter & map):', filterMapped);
*/
