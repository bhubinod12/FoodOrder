// let cap = {
//     name: "Deb",
//     team: "Cap",
//     petersTeam: function (mem1, mem2) {
//         console.log(`Hey ${this.name} I am your neighborhood's  
//         spiderman and i belong to ${this.team}'s team with members  ${mem1} ${mem2}`);
//     }
// }
// let ironMan = {
//     name: "Tony",
//     team: "Iron Man",
// }
// cap.petersTeam('Binod', 'Kumar');

// cap.petersTeam.call(ironMan, 'Binod', 'Kumar');
// cap.petersTeam.call(ironMan, ['Binod', 'Kumar']);

/**
 * Call, apply and bind methods are available on Function.prototype:
 */

/**
 * call method polyfill:
 */
// let arr = [1,2,-2,5,6,-6];
// let arr1 = [1,2,-2,5,6,-6, 10];

// Array.prototype.sum = function() {
//     let sum = 0
//     for (let i = 0; i < this.length;i++) {
//         sum+= this[i];
//     }
//     return sum;
// }

// console.log(arr.sum());

// console.log(arr1.sum());


/**
 * call method polyfill:
 */


// let cap = {
//     name: "Deb",
//     team: "Cap",
//     petersTeam: function (mem1, mem2) {
//         console.log(`Hey ${this.name} I am your neighborhood's  
//         spiderman and i belong to ${this.team}'s team with members  ${mem1} ${mem2}`);
//     }
// }

// let ironMan = {
//     name: "Tony",
//     team: "Iron Man",
// }

// cap.petersTeam.call(ironMan, 'Binod', 'Kumar');

// function Test() {
//     console.log('This is test function');
// }

// Function.prototype.myCall = function(requredObj, ...args) {
//     console.log(args);
//     let requireFn = this;
//     let obj = requredObj; // Object on which we want to call the function
//     obj.requireFn = requireFn; // function which we want to call
//     obj.requireFn(...args);
// }

// // cap.petersTeam.myCall();

// // Test.myCall();
// // let fun = cap.petersTeam;
// // cap.petersTeam.myCall(ironMan);
// cap.petersTeam.myCall(ironMan, 'Binod', 'Deb');

/**
 * apply method polyfill:
 */

// Function.prototype.myApply = function(requredObj, args) {
//     console.log(args);
//     let requireFn = this;
//     let obj = requredObj; // Object on which we want to call the function
//     obj.requireFn = requireFn; // function which we want to call
//     obj.requireFn(...args);
// }

// // cap.petersTeam.myCall();

// // Test.myCall();
// // let fun = cap.petersTeam;
// // cap.petersTeam.myCall(ironMan);
// cap.petersTeam.myApply(ironMan, ['Binod', 'Deb']);

/**
 * 
 */




