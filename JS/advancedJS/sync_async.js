/**
 * Synchronous code:
 */
// console.log('Before!!!');
// function fn() {
//     console.log('fn called!!!');
// }
// fn();
// console.log('After!!!');


/**
 * asynchronous code:
 */
/*
console.log('Before!!!');

function fn() {
    console.log('After 2sec fn called!!!');
}

setTimeout(fn, 2000);
console.log('After!!!');
*/

/**
 * Stuck in while loop:
 */
/*
console.log('Before!!!');

let a = true;
setTimeout(() => {
    a = false;
}, 2000);
while (false) {
    console.log('In while loop!!!');
}
console.log('After!!!');
*/

/**
 * Breaking the while loop:
 */
/*
console.log('Before!!!');
let a = true;
setTimeout(() => {
    a = false;
    console.log("Finally a is false!!!");
}, 2000);
let timePassed = Date.now()+5000;
while (Date.now() < timePassed) {
    console.log('In while loop!!!');
}
console.log('After!!!');
*/

/*
console.log('Before!!!');

function cb2 () {
    console.log('cb2 called!!!');
    while(1) {

    }
}

function cb1 () {
    console.log('cb1 called!!!');
}
setTimeout(cb2, 1000);
setTimeout(cb1, 2000);
console.log('After!!!');
*/

/*
console.log('Before!!!');

function cb2 () {
    console.log('cb2 called!!!');
    let timePassed = Date.now()+5000;
    while(Date.now() < timePassed) {

    }
}

function cb1 () {
    console.log('cb1 called!!!');
}
setTimeout(cb2, 1000);
setTimeout(cb1, 2000);
console.log('After!!!');
*/

/**
 * synchrnous
 * serial
 * asynchronous
 * parallel
 * 
 * Serial Task:
 * Parallel Task:
 * 
 * 
 * Synchrnous and Asynchronous code:
 * 
 * which type of task is done serially and which type of task is done parallely
 * 
 * Serial Task: depends on the previous task
 * Parallel Task: does not depend on the previous task
 * 
 */

// const fs = require('fs');
/**
 * Synchronous function given by node api to read the file
 */
// console.log("Before!!!");
// let buffer = fs.readFileSync("./f1.txt");

// console.log("" + buffer);
// console.log("After!!!");


// const fs = require('fs');
/**
 * Asynchronous function given by node api to read the file
 */
// console.log("Before!!!");
// fs.readFile("./f1.txt", function(err, data) {
//     console.log("Data: " + data);
// });

// console.log("After!!!");

//Use two file data and concatenate them using sync way.
/*
// Serial Task:
const fs = require('fs');
console.log("Before!!!");
let buffer1 = fs.readFileSync("./f1.txt");
let buffer2 = fs.readFileSync("./f2.txt");
console.log("" + buffer1+ "" + buffer2);
console.log("After!!!");
*/

// Asynchronous way:
/* you have block the main thread. */
/*
const fs = require('fs');
console.log("Before!!!");
fs.readFile("./f1.txt", function(err, data){
    console.log("Data: " + data);
    let content1 = data;
    fs.readFile("./f2.txt", function(err, data){
        console.log("Data: " + content1+ " "+ data);
    })
});
console.log("After!!!");
*/

/**
 * you dont have to block the main thread.
 * Given two files, read the content of the files and concatenate them.
 */

// const fs = require('fs');
// console.log("Before!!!");
// fs.readFile("./f1.txt", function(err, data){
//     console.log("Data: " + data);
// });
// fs.readFile("./f2.txt", function(err, data){
//     console.log("Data: " + data);
// });
// console.log("After!!!");


// fetch('./f1.txt').then(function(response){
//     response.text().then(function(text){
//         console.log(text);
//     })
// })
fetch('f1.txt')
  .then(response => response.text())
  .then(text => console.log(text))




