
// Outer function
function OuterFn () {
    var count = 0;

    // inner function
    function InnerFn () {
        count++;
        return count;
    }
    return InnerFn;
}
// var closureFn = OuterFn();
// console.log(closureFn());
// console.log(closureFn())
// console.log(closureFn())

// Using closure:

function setTimerOut () {
    var count = 0;

    setTimeout( function() {
        count++;
        return count;
    }, 3000);
}


function displayName () {
    var name = 'Binod';
    return function () {
        console.log(name);
    }
}
// var myName = displayName();
// myName();

function Sum (a) {
    return (b) => {
        return a+b;
    }
}

// console.log(Sum(3)(4));

const hexColor = '0123456789ABCDEF';
function hexGenerator () {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color+= hexColor[Math.floor(Math.random()*16)];
    }
    return color;
}
console.log(hexGenerator());





