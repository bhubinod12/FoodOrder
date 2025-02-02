// console.log("1", this);

// name = "Binod";
// console.log("4", name);

"use strict";
// name = "Binod";
// console.log("8", name);

let cap = {
    // property
    firstName: "Steve",
    // method
    sayHi: function () {
        // strict mode this will be undefined inside the function call.
// console.log(this)
        console.log("Hi from ", this.firstName);
    }
}

cap.sayHi();
let sayHiAdd = cap.sayHi;
// var firstName = "loki";
sayHiAdd();
