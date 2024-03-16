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

// function Hello () {
//     console.log('This is Hello from', this.name);
// }
// let obj = {
//     name: 'Binod'
// }
// Hello.call(obj);

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
