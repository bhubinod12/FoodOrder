// Spread/Rest/String literals/Arrow function

// Template strings Literals:
// var name = 'Sowmya'
//  console.log("This console" + " " +  name);// tradional way.

// console.log(`This console ${name}`);

// console.log(`This console ${10+20}`);

// Prototypal inheritence:

// let arr = [1,2,3,4,5];

// console.log(arr);
// arr.push(6);

// arr -> Arr -> Object
// console.log(arr.toString());

// let obj = {
//     name: 'Binod'
// }

// console.log("obj", obj);

// let obj1 = obj;
// console.log("obj1", obj1);


// obj-> address[200];
// obj1-> will point to same address[200];

// console.log("obj", obj);
// console.log("obj1", obj1);

// obj1.sayHi = function () {
//     console.log("This is sayHi method")
// }
// obj1.sayHi();
// obj.sayHi();

// Type 1: copy object from other object:

// let obj1 = JSON.parse(JSON.stringify(obj));
// obj1.sayHi = function () {
//     console.log("This is sayHi method")
// }
// obj1.sayHi()
// console.log(obj);
// console.log(obj1);

// =====
// let obj = {
//     name: 'Binod'
// }

// let obj1 = {

// }
// obj1.name = obj.name;

// console.log(obj1)
// obj1.sayHi = function() {
//     console.log('This is deep copy!!!');
// }

// console.log(obj);
// console.log(obj1);


// ======
// let arr = [1,2,3,4,5];
// let sum = 0;
// arr.sum = function () {
//     for (let i = 0; i < this.length; i++) {
//         sum+= this[i];
//     }
//     // console.log(sum);
//     return sum;
// }

// console.log(arr.sum());

// let arr1 = [1,2,3,4,5, 6];

// arr1.sum = function () {
//     for (let i = 0; i < this.length; i++) {
//         sum+= this[i];
//     }
//     return sum;
// }
// console.log(arr1.sum());

// let arr = [1,2,3,4,5];
// let arr1 = [1,2,3,4,5, 6];
// let sum  = 0;
// Array.prototype.sum = function () {
//     for(let i = 0; i < this.length; i++) {
//         sum+= this[i];
//     }
//     return sum;
// }

// console.log(arr.sum());
// console.log(arr1.sum());

// call/apply/bind:






