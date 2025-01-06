// Closure:

/*
function counter(args) {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

let getCount = counter();
console.log(getCount());
console.log(getCount())
console.log(getCount())
*/

// Nested closure:
/*
    function firstName (firstName) {
        console.log("First Name=="+firstName);
        return function (lastName) {
            console.log("Last Name=="+lastName);
            return function () {
                console.log(`My full name is ${firstName} ${lastName}`);
            }
        }
    }
    
    let firstNameFn = firstName("Binod");
    let lastNameFn = firstNameFn("Kumar");
    
    console.log(lastNameFn());

 */

    
    // console.log("Closure Example 1:");
    /*
    function OuterFun () {
        let arrFn = [];
        for(var i = 0; i < 3; i++) {
            arrFn.push(function(){
                console.log(i);
            })
        }
        return arrFn;
    }

    let arrFn = OuterFun();
    
    arrFn[0]();
    arrFn[1]();
    arrFn[2]();
*/
// Method:2
/*
    function OuterFun () {
        let arrFn = [];
        for(let i = 0; i < 3; i++) {
            arrFn.push(function(){
                console.log(i);
            })
        }
        return arrFn;
    }

    let arrFn = OuterFun();
    
    arrFn[0]();
    arrFn[1]();
    arrFn[2]();
    */
/*
    function counter(a) {
        // console.log(arguments);
        return function (b) {
            // console.log(arguments.length);
            if (arguments.length) {
                return counter (a+b)
            } else {
                return a;
            }
        }
    }
    console.log(counter(1)(2)(3)(4)(5)())
*/
/**
 * Infine closure/currying
 */
/*
function count(args) {
    let counter = 0;
    counter++;
    if (args == 0) {
        return counter;
    } 
    else {
        return function inner(args) {
            counter++;
            if (args == 0) {
                return counter;
            } else {
                return inner
            }
        }
    }
}
console.log(count(0));
console.log(count()(0));
console.log(count()()(0));
console.log(count()()()(0));
*/

/**
 * Ladder problem:
 */
/*
let ladder = {
     count:0,
     up: function() {
        this.count++;
        return this;
     },
     down: function() {
        this.count--;
        return this;
     },
     getCount: function() {
        return this.count;
     }
}

// ladder.up();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();

ladder.up().up().up().up().down();
console.log(ladder.getCount());
*/

/**
 * How set and get method works in JS:
 */
/*
let obj = {
    setName: function(name) {
        this.name = name;
        return this;
    },
    getName: function() {
        return this.name;
    },
    setFirstName: function(firstName) {
        this.firstName = firstName;
        return this;
    },
    setLastName: function(lastName) {
        this.lastName = lastName;
        return this;
    },
    getFullName: function() {
        return `Full name is ${this.firstName} ${this.lastName}`;
    }
}

console.log(obj.setName("Binod").getName());
console.log(obj.setFirstName("Binod").setLastName("Kumar").getFullName());
*/

/*
function createEventStack () {
    return {
        items: [],
        push(item) {
            if (item%2 == 0) {
                this.items.push(item);
            } else {
                console.log("Item is not even");
            }
        },
        pop() {
            this.items.pop();
        }
    }
}

let stack = createEventStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
console.log(stack.items);
console.log(stack.items.length);

*/

/**
 * Above method can be written using closure which will make items private:
 */
/*
function createEventStack () {
    let items = [];
    return {
        push(item) {
            if (item%2 == 0) {
                items.push(item);
            } else {
                console.log("Item is not even");
            }
        },
        pop() {
            items.pop();
        }
    }
}
*/
// Here items is private and can't be accessed directly outside the function. Also items act as closure to the push & pop function.
// let stack = createEventStack();
// console.log(stack.items);

/*
function calc (n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += n;
    }
    return sum;
}
// console.time();
// let res = calc(100);
// console.log(res);
// console.timeEnd();

function memoize (fn) {
    let cache = {};
    return function (n) {
        if (n in cache) {
            console.log('Value is cached');
            console.log(cache[n]);
            return cache[n];
        } else {
            console.log('Not cached so need to store the value');
            cache[n] = fn(n);
            console.log(cache[n]);
        }
    }
}

let opimizedCalc = memoize(calc);
console.time();
opimizedCalc(10);
console.timeEnd();

console.time();
opimizedCalc(10);
console.timeEnd();

console.time();
opimizedCalc(15);
console.timeEnd();
*/

// let obj1 = {
//     name: "Binod"
// }
// let obj2 = Object.create(obj1);
// obj2.lastName = "Kumar";
// console.log(obj2.__proto__);
// for (key in obj2) {
//     console.log(key);
// }

// let keys = Object.keys(obj2);
// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i]);
// }

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

let person = new Person("Binod", "Kumar");
person.fullName();

class Employee extends Person {
    constructor(firstName, lastName, empId) {
        super(firstName, lastName);
        this.empId = empId;
    }
    getEmpId() {
        console.log(`Employee id is ${this.empId}`);
    }
}

