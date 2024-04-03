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

let cap = {
    name: 'Binod',
    sayHi: function() {
        console.log("53", this.name);
        const iAmInner = function () {
            console.log("55", this.name);
        }
        iAmInner();
    }
}   
cap.sayHi();



