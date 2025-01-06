// const name = {
//     firstName: "Binod",
//     lastName: "Kumar"
// }

// let displayName = function (city, at) {
//     // console.log(city);
//     // console.log(at);
//     console.log(`My full name is ${this.firstName} ${this.lastName} and live in ${city} ${at}`);
// }

// displayName.call(name, "Bangalore");

// polyfill for the call function:
/***
 
Function.prototype.myCall = function(requredObj, ...args) {
    let requireFn = this;
    requredObj.requireFn = requireFn;
    requredObj.requireFn(...args);
}

displayName.myCall(name, 'Delhi', 'Horamavu');
* 
 */

// Apply Method:

// const name = {
//     firstName: "Binod",
//     lastName: "Kumar"
// }

// let displayName = function (city, at) {
//     console.log(`My full name is ${this.firstName} ${this.lastName} and live in ${city} ${at}`);
// }

// displayName.apply(name, ["Bangalore", "Horamavu"]);

/**
 * polyfill of apply method:
 
Function.prototype.myApply = function (requredObj, args) {
    let requireFn = this;
    requredObj.requireFn = requireFn;
    console.log(args);
    requredObj.requireFn(...args)
}

displayName.myApply(name, ["Bangalore", "Horamavu"]);

*/

/**
 * Bind method:
 */ 

/*
const name = {
    firstName: "Binod",
    lastName: "Kumar"
}

let displayName = function (city, at, test) {
    console.log(`My full name is with bind ${this.firstName} ${this.lastName} and live in ${city} ${at} or ${test}`);
}

*/

// let boundFn = displayName.bind(name, "Bangalore", "Horamavu");

// boundFn();

// polyfill of bind function:
/*
Function.prototype.myBind = function(requredObj, ...args) {
    let requireFn = this;
    // console.log(args.slice(1));
    return function(...test) {
        // console.log([...args, ...test]);
        // requireFn.call(requredObj, ...args);
        requireFn.apply(requredObj, [...args, ...test]);
    }
}

let boundFn = displayName.myBind(name, "Bangalore", "Horamavu");
boundFn("Hello");
*/



// async function fetchData() {
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos/2');
//     let response = await data.json();
//     console.log(response);
// }
// fetchData();

// let obj = {
//     name: "Binod",
//     age: 25,
//     city: "Bangalore",
//     sayHello: function() {
//         console.log(`Hello ${this.name} from ${this.city}`);
//     }
// }

// obj.sayHello();
// let sayHiAdd = obj.sayHello;
// var name = "Harshit";
// console.log(window);
// sayHiAdd();

// "use strict";

// var name = "Binod";
// console.log(name);

// function test() {
//     console.log(this);
// }
// test();

/**
 let obj = {
     name: "Binod",
     age: 25,
     city: "Bangalore",
     sayHello: function() {
         console.log(`Hello ${this.name} from ${this.city}`);
     }
 }
 
 let stringObj = JSON.stringify(obj);
 let copyiedObj = JSON.parse(stringObj);
 copyiedObj.name = "Harshit";
 console.log(copyiedObj, obj);
 
 */
// Deep copy polyfill:
/*
 let obj = {
    name: "Binod",
    age: 25,
    city: "Bangalore",
    sayHello: function() {
        console.log(`Hello ${this.name} from ${this.city}`);
    },
    address: {
        street: "Horamavu",
        pincode: 560043
    }
}

function deepCopy(obj) {
    let copyObj = {};
    for (let key in obj) {
        if (typeof obj[key] === 'object') { 
            copyObj[key] = deepCopy(obj[key]);
        } else {
            copyObj[key] = obj[key];
        }
    }
    return copyObj;
}

let finalObj = deepCopy(obj);
finalObj.address.street = "Hennur";
console.log(finalObj, obj);
*/

// console.log("Hello Binod");
// Flatten an array:
// let arr = [1,2,3, [4,5], [6,7, [8,9, [10,11]]]];
// console.log(arr.length);

// console.log(arr.flat(Infinity));
// let arr = [1,2,3, [4,5]];

// function flattenArray(arr) {
//     let finalArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             let smallFlattenArr = flattenArray(arr[i]);
//             finalArr.push(...smallFlattenArr);
//         } else {
//             finalArr.push(arr[i]);
//         }
//     }
//     return finalArr;
// }

// console.log(flattenArray(arr));

/**
 * Higher Order Function:[HOF]
 */
/*
function Square (a) {
    return a*a;
}
function Qubic (a) {
    return a*a*a;
}

function HOF (logic, arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(logic(arr[i]));
    }
    return newArr;
}
*/
// console.log(HOF(Square, [1,2,3,4,5]));
// console.log(HOF(Qubic, [1,2,3,4,5]));

// forEach;
// [1,2,3,4,5].forEach(element => {
//     console.log(element*element);
// });

// Map poliyfill:

// function Square (a) {
//     return a*a;
// }
// function Qubic (a) {
//     return a*a*a;
// }
// Array.prototype.myMap = function (logic) {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         newArr.push(logic(this[i]));
//     }
//     return newArr;
// }

// console.log([1,2,3,4,5].myMap(Square));
// console.log([1,2,3,4,5].myMap(Qubic));

// Filter polyfill:
// function isEven(element) {
//     return element%2 === 1;
// }
// function isGreater5 (element) {
//     return element > 5;
// }
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let filterArr = arr.filter(isEven)
// let even = arr.filter(isGreater5);
// console.log(filterArr);
// console.log(even);

// Array.prototype.myFilter = function (logic) {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (logic(this[i])) {
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// }
// console.log(arr.myFilter(isEven));
// console.log(arr.myFilter(isGreater5));

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let finalVal = arr.reduce(function(acc, element){
//     // console.log(element);
//     console.log("acc=="+acc, " " + "element===  "+element);
//     return acc+element
// })
// console.log(finalVal);

// let arr = [1,2,3,4,5,6,7,8,9,10];
// function sum (acc, element){
//     // console.log(acc);
//     return acc+element;
// }
// function multiply (acc, element) {
//     return acc*element;
// }

// let add = arr.reduce(sum);
// console.log("Array sum == "+ add);

// let product = arr.reduce(multiply);
// console.log("Array multiply == "+ product);

// Polyfill of reduce function:

// let arr = [1,2,3,4,5,6,7,8,9,10];
let arr = [1,2,3,4,5];
function sum (acc, element){
    return acc+element;
}
function multiply (acc, element) {
    return acc*element;
}
/*
function myReduce (arr, cb) {
    let acc = arr[0];
    for (let i  = 1; i < arr.length; i++) {
        acc = cb(acc, arr[i]);
    }
    return acc;
}
console.log(myReduce(arr, sum));
console.log(myReduce(arr, multiply));
*/
/**
     Array.prototype.myReduce = function(cb) {
        let acc = this[0];
        for (let i  = 1; i < this.length; i++) {
            acc = cb(acc, this[i]);
        }
        return acc;
    }
    console.log(arr.myReduce(sum));
    console.log(arr.myReduce(multiply));
 * 
 */










