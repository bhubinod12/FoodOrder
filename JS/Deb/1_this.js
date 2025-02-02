// console.log('1_this.js');

// let obj = {
//     name: 'Deb',
//     empID: 123,
// }

// GEC -> this -> window

// console.log(this);

// let firstName = 'Deb';
// var lastName = 'Mandal';
// console.log(this.firstName);
// console.log(this.lastName);

/**
 * type: 1
 */

// let cap = {
//     name: 'Deb',
//     sayHi: function() {
//         console.log("Hi from", this.name);  // -> here this refer to the cap object/ curret object
//     }
// }
// cap.sayHi();
// let sayHiAdd = cap.sayHi;
// sayHiAdd();

/**
 * type: 2
 */

// let cap = {
//     name: 'Deb',
//     sayHi: function() {
//         console.log("53", this.name); // -> here this refer to the cap object/ curret object

//         const iAmInner = function () {
//             console.log("55", this.name);
//         }

//         iAmInner();
//     }
// }   
// cap.sayHi();

/**
 * type: 3
 */

// let cap = {
//     name: 'Deb',
//     sayHi: function() {
//         console.log("53", this.name); // -> 53 Deb
//         // arrow function doesn't have it's own this. It will take it from outside
//         const iAmInner = () => {
//             console.log("55", this.name);
//         }
//         iAmInner();
//     }
// }   
// cap.sayHi();


/**
 * type: 4
 */
// var name = 'Binod';
// let cap = {
//     name: 'Deb',
//     sayHi: () => {
//         // console.log(this); // -> window
//         console.log("Hi from", this.name);
//     }
// }   
// cap.sayHi();
// let sayHiAdd = cap.sayHi;
// sayHiAdd();

/**
 * type: 5
 */
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

/**
 * type: 6
 */

// let cap = {
//     firstName: "Deb",
//     sayHi: function () {
//         console.log("91", this.firstName); // -> current object
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


