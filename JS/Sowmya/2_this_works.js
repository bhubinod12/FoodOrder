// console.log('Hello!!!!!');

// Spread && Rest operator.

// let arr = [1,2,3,4,5];
// console.log(...arr);


// function restOperator (a,b, ...arr1) {
//     console.log(a, b, arr1);
//     // ...arr1 restoperator
// }

// restOperator(1,2,3,4,5,6);

// let obj = {
//     fName: 'Binod',
//     lName: 'Kumar'
// }

// Type 1:
// console.log(obj.fName);
// console.log(obj.lName);

// Type 2:
// const {fName, lName} = obj;

// console.log(obj.fName);
// console.log(obj.lName);
// ============================

// Use of this keyword
// console.log(this);
// Type 1:
// let cap = {
//     name: 'Binod',
//     sayHi: function() {
//         console.log(this);
//         console.log("Hi from", this.name);
//     }
// }
// cap.sayHi();

// Type 2:
// [200][204][206][208]
// [][][][]

// var name = 'Sowmya'
// let cap = {
//     name: 'Binod',
//     sayHi: function() {
//         console.log("Hi from", this.name);
//     }
// }
// cap.sayHi();
// let sayHiAdd = cap.sayHi;
// // console.log(sayHiAdd);
// sayHiAdd();

// var a = 100;
// let b = 20;
// console.log(this);
// console.log(this.a);
// console.log(this.b);


// function Type1 () {

// }
// const Type2 = function () {

// }

// IIFE
// var data = (function() {
//     console.log('IFFE is called');
// })();


// Type 3:

// let cap = {
//     name: 'Binod',
//     sayHi: function() {
//         console.log("53", this.name);
//         const iAmInner = function () {
//             console.log("55", this.name);
//         }
//         iAmInner();
//     }
// }   
// cap.sayHi();

// ==04-04-24[With arrow function]==

// let myFunction = () => {
//     let a = 10;
//     let b = 2;
//     return a * b;
// }
// console.log(myFunction());

// Type 1:
// let cap = {
//     name: 'Binod',
//     sayHi: function() {
//         console.log("53", this.name);
//         const iAmInner = () => {
//             console.log("55", this.name);
//         }
//         iAmInner();
//     }
// }   
// cap.sayHi();

// Type 2:
// console.log(this);
// let cap = {
//     name: 'Binod',
//     sayHi: () => {
//         console.log("Hi from", this.name);
//     }
// }   
// cap.sayHi();
// let sayHiAdd = cap.sayHi;
// sayHiAdd();

// Type 3:
// var firstName = "Binod";
// console.log(this.firstName);
// let cap = {
//     firstName: "Steve",
//     sayHi: () => {
//         console.log("91", this.firstName);
//         // arrow ->  does not have it's own this. I am going to cheat it from outside 
//             const iAmInner = () => {
//                 console.log("95", this.firstName);
//             }
//             iAmInner();
//     }
// }
// cap.sayHi();

// Type: 4

// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("91", this.firstName);
//         const subInner = () => {
//             console.log("94", this.firstName);
//             const iAmInner = () => {
//                 console.log("95", this.firstName);
//             }
//             iAmInner();
//         }
//         subInner();
//     }
// }
// cap.sayHi();








