// var firstName = 'Binod';
// 'use strict'
// firstName = 'Binod'
// console.log(firstName);

// Type 1:

// 'use strict'
// function AA() {
//     console.log(this);
// }
// AA();
// console.log(this);

// 'use strict'
// let cap = {
//     // property
//     firstName: "Steve",
//     // method
//     sayHi: function () {
//         console.log('sayHi method is called', this);
//         console.log("Hi from ", this.firstName);
//     }
// }

// cap.sayHi();
// let sayHiAdd = cap.sayHi;
// sayHiAdd();

// Type 3:

// "use strict";
// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("47", this.firstName);
//         const iAmInner = function () {
//             console.log("49", this.firstName);
//         }
//         // EC by this kind of call -> undefined
//         iAmInner();
//     }
// }

// // EC by this -> ?? -> cap
// cap.sayHi();

// Type 4:

// "use strict";

// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("53", this.firstName);
//         // arrow ->  does not have it's own this. I am going to cheat it from outside 
//         const iAmInner = () => {
//             console.log("55", this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();

// Type 5:

// "use strict";

// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("91", this.firstName);
//         // arrow ->  does not have it's own this. I am going to cheat it from outside 
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

