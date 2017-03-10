const output = (str, regex, target) => {
    target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
}



var str = `Is this This?`;

// var regex = new RegExp('is', 'gi');
// var regex = /is/;
// var regex = /is/gi;
var regex = /is/g;


output(str,regex, document.querySelector('pre'));

//console.log(regex.test(str));
//console.log(regex.exec(str));
//console.log(regex.exec(str));
//console.log(regex.exec(str));
// console.log(regex.exec(str));

// console.log(str.match(regex));

// console.log(str.replace(regex, str => 'XX'));

// console.log(str.search(regex));