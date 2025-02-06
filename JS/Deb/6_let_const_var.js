/**
 * let, const, var
 * type 1
 */

// function scope () {
//     a = 1;
//     console.log(a);
// }
// scope();
// console.log(a);

/**
 * type 2
 */

// var a = 10;
// function scope () {
//     console.log(a);
// }
// scope();
// console.log(a);

/**
 * type 3
 */

// var a = 10;
// function scope () {
//     var a =20;
//     console.log(a);
// }
// scope();
// console.log(a);

/**
 * type 4
 */

// var a = 10;
// function scope () {
//     a =20;
//     console.log(a);
// }
// scope();
// console.log(a);

/**
 * let, const
 */

// var a=10;
// function scope () {
//     var a =20;
//     console.log(a);
//     if (true) {
//         var a = 30;
//         console.log(a);
//     }
//     console.log(a);
    
// }
// scope();
// console.log(a);

/**
 * type 5
 */

// var a=10;
// function scope () {
//     var a =20;
//     console.log(a); //20
//     if (true) {
//         let a = 30;
//         console.log(a); //30
//     }
//     console.log(a); //20
// }
// scope();
// console.log(a); //10

/**
 * type 1 brute force method
 */
// let ansArr = '';
// function reverseString(str) {
//     let len = str.length;
//     for (let i = len-1; i >= 0; i--) {
//         ansArr = ansArr + str[i];
//     }
//     return ansArr;
// }

// let str = 'Hello';
// console.log(reverseString(str));

/**
 * type 2: Using array methods
 */

// let ansArr = '';
// function reverseString(str) {
//     console.log((str.split('')).reverse().join(''));
// }

// let str = 'Hello';
// reverseString(str);
