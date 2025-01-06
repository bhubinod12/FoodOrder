function getApi () {
    console.log("This is for getting the data from API");
}

let throwttle = function (fn, delay) {
    var flag = true;
    var count = 0;
    return function() {
        console.log(`Method is getting called ${++count} times`);
        if (flag) {
            fn();
            console.log(flag);
            flag = false;
            
            setTimeout(function(){
                flag = true;
                
            }, delay);
        }
    }
}

var betterFn = throwttle(getApi, 0);
betterFn();
betterFn();
betterFn();
betterFn();
