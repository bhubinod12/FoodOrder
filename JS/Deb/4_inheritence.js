/**
 * Data Types in JS
 * Boolean
 * Number
 * String
 * object
 * undefined
 * null
 */
//  let a = 10
//  typeof a
// let arr = [1, 2, 3, 4];

// console.log(arr);
// console.log(typeof arr); 
// let b = "hello";
// // console.log(Array.isArray(arr));

// console.log(Array.isArray(b));

// Use typeof to check the type of a variable

// let arr = [1, 2, 3, 4];
// arr -> Array -> Object -> null
// arr.push(5);
// console.log(arr);

// let obj = {
//     a: 10,
//     b: 20,
//     sayNumer: function() {
//         console.log("number");
//     }
// }

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5, 6];

console.log(arr1);

// arr1.sum = function() {
//     let sum = 0;
//     for (let i = 0; i< this.length; i++) {
//         sum = sum + this[i];
//     }
//     return sum;
// }

// console.log(arr1.sum());

// arr2.sum = function() {
//     let sum = 0;
//     for (let i = 0; i< this.length; i++) {
//         sum = sum + this[i];
//     }
//     return sum;
// }

// console.log(arr2.sum());

Array.prototype.globalSum = function() {
    let sum = 0;
    for (let i = 0; i< this.length; i++) {
        sum = sum + this[i];
    }
    return sum;
}

console.log(arr1.globalSum());
console.log(arr2.globalSum());





