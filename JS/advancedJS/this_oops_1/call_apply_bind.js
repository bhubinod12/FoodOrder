// let cap = {
//     name: 'Binod',
//     sayHi: function() {
//         console.log("Hi from", this.name);
//     }
// }
// cap.sayHi();
// let sayHiAdd = cap.sayHi;
// sayHiAdd();

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


// let cap = {
//     name: 'Binod',
//     sayHi: () => {
//         console.log("Hi from", this.name);
//     }
// }   
// cap.sayHi();
// let sayHiAdd = cap.sayHi;
// sayHiAdd();

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


// GEC -> window -> window.firstName
// var firstName = "Binod";
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


// let cap = {
//     name: 'Binod',
//     sayHi: function(arg1, agr2) {
//         console.log("Hi from", this.name + ' '+ arg1 + ' ' + agr2);
//     }
// }   
// cap.sayHi('Harshit', 'Hello');

// let cap = {
//     name: 'Binod',
//     sayHi: function(arg1) {
//         console.log("Hi from", this.name + ' ' + arg1[0] + ' ' + arg1[1]);
//     }
// }   
// cap.sayHi(['Harshit', 'Hello']);

// Call:
// function Hello () {
//     console.log('This is Hello from', this.name);
// }
// let obj = {
//     name: 'Binod'
// }
// Hello.call(obj);


//Bind

// let cap = {
//     name: 'Binod',
//     sayHi: function() {
//         console.log("Hi from", this.name);
//     }
// }
// let obj = {
//     name: 'Harshit'
// }
// let newF = cap.sayHi.bind(obj);
// newF();


function printName(city, country){
    // console.log(arg);
    console.log( `${this.firstName} ${this.lastName}, ${city} - ${country}` );
}

Function.prototype.myCall = function (context, ...args) {
    // console.log(args);
    context.myFn = this;
    context.myFn(...args);
}

const myName = {
    firstName: 'Ankit',
    lastName: 'Saxena'
};

printName.myCall(myName, 'Bangalore', 'India');
