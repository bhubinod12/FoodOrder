// console.log('JS/Deb/5_call_apply_bind.js');

/**
 * Hoisting
 */


// console.log(a);

// var a = 20; // undefined
// var b; // undefined
// var c= 10;

// console.log(d);
// let d;
// function Hoisting() { // memory allocation
//     console.log('Hoisting == '+  c);
// }

// Hoisting();

/**
 * Call:
 */

// let obj1 = {
//     name: 'Deb',
//     sayHi: function() {
//         console.log('Hi '+ this.name);
//     }
// }

// obj1.sayHi();

// let obj2 = {
//     name: 'John',
//     sayHi: function() {
//         console.log('Hi '+ this.name);
//     }
// }

// obj2.sayHi();

// let obj2 = {
//     name: 'John'
// }

// obj1.sayHi.call(obj2);

/**
 * call
 */
// function sayHi(city, country) {
//     console.log('Hi '+ this.name + ' from '+ city + ', '+ country);
// }


// // let obj1 = {
// //     name: 'Deb'
// // }

// // let obj2 = {
// //     name: 'John'
// // }

// sayHi.call(obj1, 'Kolkata', 'India');
// // sayHi.call(obj2, 'Delhi',   'India');

/**
 * apply
 */

// function sayHi(...args) {
//     console.log(city , args);
//     console.log('Hi '+ this.name + ' from '+ args[0] + ', '+ args[1]);
// }


// let obj1 = {
//     name: 'Deb'
// }

// let obj2 = {
//     name: 'John'
// }
// let arr = ['Kolkata', 'India'];

// sayHi.apply(obj1, arr);
// sayHi.apply(obj2, arr);


// let arr1 = [1,2,3,4,5];
// console.log(...arr1);

/**
 * bind
 */

// let obj1 = {
//     name: 'Deb',
//     sayHi: function() {
//         console.log('Hi '+ this.title);
//     }
// }

// let obj2 = {
//     title: 'move next page'
// }
// let bindMethod = obj1.sayHi.bind(obj2);

// bindMethod();








