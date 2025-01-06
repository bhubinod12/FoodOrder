let cap = {
    name: "Steve",
    team: "Cap",
    petersTeam: function (mem1, mem2) {
        console.log(`Hey ${this.name} I am your neighborhood's  
        spiderman and i belong to ${this.team}'s team with members  ${mem1} ${mem2}`);
    }
}
let ironMan = {
    name: "Tony",
    team: "Iron Man",
}

//Call -> It is on Function -> 

/**
 * polyfill of call method
 * **/

// Function.prototype.myCall = function (requredObj, ...args) {
//     let requireFn = this;
//     requredObj.requireFn = requireFn;
//     console.log(args);
//     requredObj.requireFn(...args);
// }

// cap.petersTeam.myCall(ironMan, 'Binod', 'Kumar');

// apply:

// Function.prototype.myApply = function (requredObj, args) {
//     let requireFn = this;
    
//     requredObj.requireFn = requireFn;
//     console.log(args);
//     requredObj.requireFn(...args);
// }

// cap.petersTeam.myApply(ironMan, ['Binod', 'Kumar']);

//bind:

// Function.prototype.myBind = function (requredObj) {
//     let requireFn = this;
//     return function (...args) {
//         requireFn.call(requredObj, ...args)
//     }
// }
// let boundFn = cap.petersTeam.myBind(ironMan);
// console.log(boundFn);
// boundFn('Binod', 'Kumar');
