// let config = {
//     appName: 'My App',
//     database: {
//         host: 'localhost',
//         name:  'myapp',
//         user: 'admin',
//         pwd: 'admin'
//     }
// }
// console.log(config.database.host); // localhost

// If we don't allow to add new properties to the object
// preVentExtensions works only on the first level of the object not on the nested objects
/*

let newExtendableObj = Object.preventExtensions(config);

config.port = 3306;

console.log(newExtendableObj);
console.log(config);
*/

/**
 * Object.seal() - It prevents adding new properties to the object and also p
 * revents deleting the existing properties only the values can be changed
 */
/*
let config = {
    appName: 'My App',
    database: {
        host: 'localhost',
        name:  'myapp',
        user: 'admin',
        pwd: 'admin'
    }
}
const sealedObj = Object.seal(config);

sealedObj.port = 3306;

console.log(sealedObj);
*/

/**
 * Object.freeze() - It prevents adding new properties to the 
 * object and also will not allow to change the existing properties
 * and also and deleting the existing properties
 */

// let config = {
//     appName: 'My App',
//     database: {
//         host: 'localhost',
//         name:  'myapp',
//         user: 'admin',
//         pwd: 'admin'
//     }
// }
// const sealedObj = Object.freeze(config);

// sealedObj.port = 3306;

// console.log(sealedObj);

setTimeout(() => {
    console.log('Hello');
},0);

setTimeout(() => {
    console.log('World');
},0);
