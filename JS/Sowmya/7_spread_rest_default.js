// var a = 100;
// console.log('Hello' + " " + a);

// String literal:

// console.log(`Hello ${a}`);

/**
 * Normal function:
 */

// function fn (param1, param2, param3) {
//     console.log(`${param1} ${param2} ${param3}`);
// }

// fn('Hi', 'Hey', 'Hello');

// function fn (param1, param2, param3) {
//     console.log(`${param1} ${param2} ${param3}`);
// }

// fn('Hi', 'Hey');

// function fn (param1, param2, param3 = 'default value') {
//     console.log(`${param1} ${param2} ${param3}`);
// }

// fn('Hi', 'Hey', 'Hello');

/**
// 
 * spread operator : copies value,ref from on array to another for only first level
 * 
 * */

// assignment operator -> reference remain
// let arr = [1, 2, 3, 4, 5];

// arr2 and arr has the same ref
// let arr2 = arr;

// console.log(arr);
// console.log(arr2);

// arr2.pop();
// console.log(arr);
// console.log(arr2);

// arr2.push(100);
// console.log(arr);
// console.log(arr2);

// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr;

// arr2[2] = 200;
// console.log(arr);
// console.log(arr2);

// spread copies value  from one array another array for the first level

// [1,2,3,4,5]

// [1,2,[3,4], 5]

// [1,[2,3,4],5]

// [1,[2,[3,4]],5]

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [...arr];
// console.log(arr);
// console.log(arr2);
// arr2.pop();
// console.log(arr);
// console.log(arr2);

let arr = [1, 2, [3, 4], 5];
let arr2 = [...arr];

// arr2.pop();
// console.log(arr);
// console.log(arr2);

// arr2.push(100);

// console.log(arr);
// console.log(arr2);


// arr2[2] = 100;
// console.log(arr);
// console.log(arr2);


// arr2[2][0] = 200;

// console.log(arr);
// console.log(arr2);


/****
 * rest -> It is used as paremeter of fn .
 *  use you to collect remianing parameters numbers of params . 
 * ***/

function fn (param, ...restOp) {
    console.log(`${param} ${restOp}`)
}

fn('Hi', 'Hey', 'Hello');




