/**
 * Normal fn: parameter 
 * **/

// function fn (param1, param2, param3) {
//     console.log(`${param1} ${param2} ${param3}`);
// }

// fn('Hi', 'Hello', 'Hey');

 
/**
 * if param is not passed:
 * **/

// function fn (param1, param2, param3) {
//     console.log(`${param1} ${param2} ${param3}`);
// }

// fn('Hi', 'Hello');


/**
 * default param::
 * **/

// function fn (param1, param2, param3 = 'Default value') {
//     console.log(`${param1} ${param2} ${param3}`);
// }

// fn('Hi', 'Hello');
// fn('Hi', 'Hello', 'Dont take default value');

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

// arr2[2] = 200;
// console.log(arr);
// console.log(arr2);

// spread copies value  from one array another array for the first level

// let arr = [1, 2, [3, 4], 4, 5];
// let arr2 = [...arr];

// arr2.pop();
// arr2.push(100);

// console.log(arr);
// console.log(arr2);

// console.log(arr2);
// arr2[2] = 100;
// console.log(arr);
// console.log(arr2);


// arr2[2][0] = 200;

// console.log(arr);
// console.log(arr2);
// console.log("orginal arr", arr, "updated array", arr2);


/****
 * rest -> It is used as paremeter of fn .
 *  use you to collect remianing parameters numbers of params . 
 * ***/

// function fn(param1, param2, param3) {
//     console.log(`${param1} ${param2} ${param3}`);
// }

// fn('Hi', 'Hello', 'Hey');

function fn(param, ...param1) {
    // console.log(param1);
    // return;
    console.log(param, ...param1);
}

fn('Hi', 'Hello', 'Hey');

fn("Hi", "Hello", "Hola");



