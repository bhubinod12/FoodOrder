// function promiseFn () {
//     return new Promise(function(resove, reject) {
//         // resove(100);
//         reject("This is rejected");
        
//     })
// }
// promiseFn().then((res) => {
//     console.log(res)
// })
// .catch(function(err) {
//     console.log(err);
// })

// let responseData = promiseFn();
// responseData.then((res) => {
//     console.log(res);
// });

/**
 * Nested Promises
 */
// let fs = require('fs');

// let promise = fs.promises.readFile('./f1.txt');

// promise.then(function(data){
//     console.log(data+"");
//     let p2 = fs.promises.readFile('./f2.txt');
//     p2.then(function(data){
//         console.log(data+"");
//         let p3 = fs.promises.readFile('./f3.txt');
//         p3.then(function(data){
//             console.log(data+"");
//         })
//     })
// });

/**
 * Promise Chaining
 */

/*
let fs = require('fs');

let promise = fs.promises.readFile('./f1.txt');

promise.then(function(data){
    console.log(data+"");
    let p2 = fs.promises.readFile('./f2.txt');
    return p2;
}).then(function(data){
    console.log(data+"");
    let p3 = fs.promises.readFile('./f3.txt');
    return p3;
}).then(function(data){
    console.log(data+"");
}).catch(function(err){
    console.log(err);
});
*/
/*
let fs = require('fs');
function promiseFn () {
    return new Promise(function(resove, reject) {
        // resove(100);
        // reject("This is rejected");
        fs.readFile('./f1.txt', function(err, data){
            if(err){
                reject(err);
            } else {
                resove(data+"");
            }
        });
        
    })
}
promiseFn().then(function(res) {
    console.log(res)
})
.catch(function(err) {
    console.log(err);
})

*/
/**
 * promise can either be resolved or rejected once in the life time.
 * If it is resolved, then it will not be rejected and vice versa.
 * callback of promise queue is separate from the callback queue which is known as microtask queue.
 * promise solve the insversion of control problem.
 */
// callback queue:
setTimeout (function(){
    console.log("First");
},0);

// microtask queue:
queueMicrotask(function(){
    console.log("Second");
},1000);
