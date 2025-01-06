/**
 * setInterval is nothing but repition of setTimeout:
 */
/**
 * Create a setInterval polyfill with the help of setTimeout:
 */
// Method 1:
/*
function cb () {
    console.log('called from setInterval polyfill');
}
let timerId = null;
function mySetInterval(cb, time) {
    timerId = setTimeout(function(){
        cb();
        mySetInterval(cb, time);
    }, time);
    // return timerId;
}
function myClearInterval() {
    clearTimeout(timerId);
    console.log('Interval Cleared');
}

mySetInterval(cb, 1000);
setTimeout(function(){
    myClearInterval();
}, 5000);
*/

// Method 2:

function cb () {
    console.log('called from setInterval polyfill');
}

function mySetInterval(cb, time) {
    let obj = {
        flag: true
    }
    function myFn () {
        if (obj.flag){
            cb();
            setTimeout(myFn, time);
        }
    }
    setTimeout(myFn, time);
    return obj;
}

let obj = mySetInterval(cb, 1000);

// Clear Interval:
function myClearInterval() {
    obj.flag = false;
    console.log('Interval Cleared');
}
setTimeout(function(){
    myClearInterval();
}, 5000);