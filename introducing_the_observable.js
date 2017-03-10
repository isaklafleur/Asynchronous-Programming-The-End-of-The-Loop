// https://egghead.io/lessons/javascript-introducing-the-observable
// https://github.com/ReactiveX/rxjs

// Asynchronous Programming: The End of The Loop

//var Rx = require('rxjs/Rx');

var Observable = Rx.Observable;

var button = document.getElementById('button');

// Classic way...
/*
var handler = function(e) {
    alert('clicked');
    button.removeEventListener('click', handler);
};

button.addEventListener('click', handler);
*/

///////////////////////
// https://cdnjs.cloudflare.com/ajax/libs/rxjs/5.0.1/Rx.js
// https://cdnjs.cloudflare.com/ajax/libs/rxjs/4.1.0/rx.all.js
// Working with Asynchronous with Obserables 4.1

var clicks = Observable.fromEvent(button, 'click');

    var subscription =
    clicks.forEach(
        function onNext(e) {
            alert('clicked');
            subscription.dispose(); // remove the "EventListener"
        },
        function onError(error) {
            console.log('ERROR!');
        },
        function onCompleted() {
            console.log('done');
        });

//////////////////////

// Working with Synchronous 
/*
try {
    [1,2,3].forEach(function(i) {
    console.log(i);
});
console.log('done');
}
catch(e) {
    console.log('ERROR!');
}
*/
////////////////////