
/**
 * 1. Syntax Error:
 */
// le a;

/**
 * 2. Shadow Error:
 * Illegal shadowing: Indentifier 'a' has already been declared
 */

/*
let a = 10;

{
    var a = 20;
}
*/
// 4. Type Error:
// console.log("Before Error");
// let obj = {};
// obj.method();

/************Run Time Error******** */

/****
 * 3. Reference Error:
 */

// 1. TDZ -> temporal dead zone ReferenceError: Cannot access 'a' before initialization
// console.log(a);
// let a = 10;

// ReferenceError: Cannot access 'fn' before initialization
// fn();

// 'use strict';
// ReferenceError: a is not defined
// a = 10;
// console.log(a);

/******Range Error**** */

// 1. Stack Overflow Error

// RangeError: Maximum call stack size exceeded
// function foo() {
//     foo();
// }

// foo();

// 2. Range Error
// RangeError: Invalid array length
// let a = [];
// a.length = 100 ** 1000;
// console.log(a.length);

// TyeError:
// TypeError: a.toUpperCase is not a function
// let a = 10;

// a.toUpperCase();
let obj = {};
// TypeError: obj.fn is not a function
// console.log(obj.fn());

// TypeError: Cannot read properties of undefined (reading 'abc')
// console.log(obj.a.abc);
