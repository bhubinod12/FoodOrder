// Using Bind method:
/*
function multiply(x,y) {
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this, 5,5);
multiplyByTwo(3);

// Using Closure:

function multiply(x, y) {
    console.log(x*y);
    return function (y) {
        console.log(x*y);
    }
}

var multiply1 = multiply(2);
multiply1(8);
*/

// ==
// Sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)();

// Sum(1)(2);
/*
let sum = function(a) {
    return function(b) {
        if (b) {
            return sum(a+b);
        } else {
            return a;
        }
    }
}

console.log(sum(1)(2)(3)(4)());
console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)());
*/

// With arrow function:
let sum = (a) => {
    return (b) => {
        return b ? sum(a+b) : a;
    }
}
console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)());