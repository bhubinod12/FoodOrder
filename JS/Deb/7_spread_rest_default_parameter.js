// console.log('Spread & rest operator');

/**
 * Spread operator:
 */

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(...arr);

// let arr1 = arr;
// console.log(arr);
// console.log(arr1);

// arr1.push(6);
// console.log('After adding new elemet');
// console.log('arr==', arr);
// console.log('arr1==',arr1);

// shallow copy

/*
Copy of array using spread operator
*/

// let arr = [1, 2, 3, 4, 5];

// let arr1 = [...arr];
// arr1.push(6);

// console.log('arr==', arr);
// console.log('arr1==', arr1);

// let arr = [1, 2, [3, 4], 5];
// // console.log('arr==', arr);

// let arr1 = [...arr];
// // arr1[2][1][0] = 6;
// console.log('arr1==', arr1);

// let arr = [1, 2, [3, 4], 5];
// console.log('arr==', [...arr]);

/**
 * Rest operator:
 */
// function paranFn (param1, ...rest) {
//     console.log(`param1==' ${param1} ${rest}`);
//     // console.log(`param1==' ${param1} ${param2} ${param3}`);
// }

// paranFn(1, 2, 3);


/**
 * Default parameter:
 */

// function paranFn (param1, param2, param3 = 5) {
    
//     console.log(`Result==' ${param1} ${param2} ${param3}`);
// }

// paranFn(1, 2,10);

// let arr = [1, 2, [3, 4], 5];
// console.log('arr==', arr);

let arr = [1, [2, [3, [4], 5]]];
console.log('Flatten array==', arr.flat(Infinity));

/**
 * Recursive function:
 */



