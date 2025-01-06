var counter = 0;
function getData(context, arg) {
    // console.log(context, arg);
    console.log('This is for debouncing===>'+ counter++);
}

var doSomethingMagic = function(fn, d) {
    var timer;
    return function(arguments) {
        let context = this;
        args = arguments;
        clearTimeout(timer);
       timer =  setTimeout(function(){
            fn.apply(context, args);
        },d);
    }
}
var betterFn = doSomethingMagic(getData, 3000);