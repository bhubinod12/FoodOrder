// console.log('JS/Deb/11_deepCopy_shallowCopy.js');

/**
 * Shallow Copy
 */

// let arr = [1, 2, 3, 4, 5];
// let arrCopy = arr;

// console.log(arr); // [1, 2, 3, 4, 5]
// console.log(arrCopy); // [1, 2, 3, 4, 5]

// arrCopy[0] = 100;
// console.log(arr); 
// console.log(arrCopy); 

/**
 * Shallow copy with Spread operator
 */

// let arr = [1, 2, 3, 4, 5];

// let array = [...arr];
// console.log(arr); // [1, 2, 3, 4, 5]
// console.log(array); // [1, 2, 3, 4, 5]

// array[0] = 100;

// console.log(arr); // [1, 2, 3, 4, 5]
// console.log(array); // [100, 2, 3, 4, 5]

/**
 * With nested array
 */

// let arr = [1, 2, 3, [4, 5], 6,7];
// let array = [...arr];

// // console.log(arr); // [1, 2, 3, [4, 5], 6, 7]
// // console.log(array); // [1, 2, 3, [4, 5], 6, 7]

// // array[1] = 100;
// // console.log(arr); // [1, 2, 3, [4, 5], 6, 7]
// // console.log(array); // [1, 100, 3, [4, 5], 6, 7]

// array[3][0] = 400;
// console.log(arr); // [1, 2, 3, [400, 5], 6, 7]
// console.log(array); // [1, 2, 3, [400, 5], 6, 7]

/**
 * Shallow copy with Object.assign()
 */

/**Object.assign**/

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
// };

// let copiedObject = Object.assign({}, person);

// // console.log(person);
// // console.log(copiedObject);

// copiedObject.address.city = "Odinson";

// console.log('person==', person);
// console.log("copiedObject===", copiedObject);


/**
 * Deep Copy : JSON.stringify and JSON.parse
 */
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
// };

// let stringiFyObj = JSON.stringify(person);
// // console.log('stringiFyObj==', stringiFyObj);
// let deepClonedObj = JSON.parse(stringiFyObj);
// // console.log('deepClonedObj==', deepClonedObj);

// deepClonedObj.address.city = "Odinson";

// console.log('person==', person);
// console.log("deepClonedObj===", deepClonedObj);


/**
 * Deep copy with function
 */
let obj = {
    firstName: 'Deb',
    lastName: 'Kumari',
}
// console.log(obj.firstName);
// console.log(obj['firstName']);


function copyObject(obj) {
    let copiedObj = {};
   for (let key in obj) {
       copiedObj[key] = obj[key];
   }
   return copiedObj;
}

let copiedObj = copyObject(obj);

// console.log(copiedObj);

copiedObj.firstName = "Debayan";
console.log(obj);
console.log(copiedObj);


// let obj = {
//     firstName: 'Deb',
//     lastName: 'Kumari',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     }
// }


// for in loop
// for of loop
// Recursion



