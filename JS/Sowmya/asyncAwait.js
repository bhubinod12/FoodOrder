// function promisiFy () {
//     return new Promise(function(resolve, reject) {
//         // resolve('Hello Promise');
//         reject('rejected');
//     })
// }

// promisiFy().then(function(res) {
//     console.log(res);
// }).catch (function(err) {
//     console.log(err);
// })

// Axios

//  async function AsyncAwaitFn () {
//     let responseData = await fetch('https://jsonplaceholder.typicode.com/users');
//     // console.log(responseData);
//     let data = await responseData.json();
//     console.log(data);
// }
// AsyncAwaitFn();
// let p1 = Promise.resolve('First promise');
// let p2 = Promise.resolve('Second promise');

// Promise.all([p1,p2]).then(function(values) {
//     console.log(values[0])
// })

// var, let , const


// let arr = [1,2,3,10,9,8,7,6,5];
// 0 -> 1
// max = 1
// max = 2, 3 10,
// function secondLargest (arr) {
    
//     let len = arr.length;
//     let max = Number.MIN_SAFE_INTEGER;
//     let secondMax = Number.MIN_SAFE_INTEGER;
//     let index = -1;
//     for (let i = 0; i < len; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//             index = i;
//         }
//     }
//     console.log(index);
//     // [1,2,3,10,9,8,7,6,5];
//     for (let i = 0; i < len; i++) {
//         if (secondMax < arr[i] && i != index) {
//             secondMax = arr[i];
//         }
//     }
//     return secondMax;
// }

// console.log(secondLargest(arr));

// let arr = [1,2,3,10,9];
// function arrRotation(arr, rotationPos) {
//     for (let i = 0; i < rotationPos; i++) {
//         let element = arr.pop();
//         arr.unshift(element);
//     }
//     return arr;
// }
// console.log(arrRotation(arr, 2));

// let str = 'sowmyaA';
// let count = 0;
// function findVowels (str) {
//     let vowelsArr = ['a', 'i', 'e', 'o', 'u'];
//     let len = str.length;
//     str = str.toLowerCase();
//     for (let i = 0; i < len; i++) {
//         let char = str[i];
//         if (vowelsArr.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(findVowels(str));

// Flatten array:
let a = [1,2,5,4,[2,[10],9],3];
// console.log(a.flat(Infinity));






