console.log('Promises');
/**
 * promise.then-> Here then works as listener for the promise object.
 */

let fs = require('fs');

let promise = fs.promises.readFile('./f1.txt');


// promise.then(function(data){
//     console.log('Data->'+data);
// });

// promise.then(function(data){
//     console.log('Data1->'+data);
// });
// promise.catch(function(err){
//     console.log('Error->'+err);
// })

// Instead of using then and catch we can use then with two arguments.

// promise.then(scb, fcb);


// function scb(data){
//     console.log('Data->'+data);
// }

// // Instead of promise.catch, we can use second argument of then as fcb.
// function fcb(err){
//     console.log('Error->'+err);
// }

// We can use in three ways:

// promise.then(scb, fcb);
// promise.then(scb);
// // promise.catch(fcb);
// // promise.then(null, fcb);
// function scb(data){
//     console.log('Data->'+data);
// }
// promise.finally(function(){
//     console.log('Finally');
// })

// Promise.resolve("Hello").then(function(data){
//     console.log(data);
// });

let p1 = Promise.resolve(100);

p1.then(function(data){
    console.log(data);
    // return data*2;
}).then(function(res){
    console.log(res);
    return 200;
}).then(function(res1){
    console.log(res1);
}).finally(function(){
    console.log('Finally');
}).then(function(res2){
    console.log(res2);
    throw new Error('Error');
}).catch(function(err){
    console.log(err);
});