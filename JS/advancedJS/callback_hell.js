/**
 * Callback Hell
 * Initially, callbacks were used to handle asynchronous operations.
 * Nested callbacks are called callback hell.
 * I want to read all the files serially
 * */
/*
let fs = require('fs');

console.log("Before");
fs.readFile("./f1.txt", function(err, data){
    if(err){
        console.log(err);
    } else {
        console.log(data.toString());
        fs.readFile('./f2.txt', function(err,data){
            if(err){
                console.log(err);
            } else {
                console.log(data.toString());
                fs.readFile('./f3.txt', function(err,data){
                    if(err){
                        console.log(err);
                    } else {
                        console.log(data.toString());
                    }
                })
        }})
    }
});

console.log("After");
*/

// let fs = require('fs');

// console.log("Before");
// fs.readFile("./f1.txt", cb1);

// function cb1(err, data){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data.toString());
//         fs.readFile('./f2.txt', cb2);
//     }
// }
// function cb2(err,data){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data.toString());
//         fs.readFile('./f3.txt', cb3);
// }}
// function cb3(err,data){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// }

// console.log("After");

// let fs = require('fs');
// function promise() {
//     return new Promise(function(resolve, reject){
//         fs.readFile("./f1.txt", function(err, data){
//             if(err){
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// promise().then(function(resolve){
//     console.log(resolve + "");
// }).then(function(err){
//     console.log(err);
// });