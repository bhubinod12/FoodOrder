/********** setTimeout ****clearTimeout******/
/*
console.log('Before!!!');

function cb() {
    console.log('from setTimeout, cb called!!!');
}
let timerId = setTimeout(cb, 2000);

function cancelTimer() {
    console.log('Timer cancelled!!!');
    clearTimeout(timerId);
}
setTimeout(cancelTimer, 1000);
console.log('After!!!');
*/

/*************************** */

/*** setInterval *** clearTimeInterval **/

console.log('Before!!!');
function cb () {
    console.log('from setInterval, cb called!!!');
}
function cancelTimer() {
    console.log('Timer cancelled!!!');
    clearInterval(timerId);
}
let timerId = setInterval(cb, 2000);
setTimeout(cancelTimer, 3000);
console.log('After!!!');