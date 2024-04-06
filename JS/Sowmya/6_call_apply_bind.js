// console.log('Hello!!!!!');

// Spread && Rest operator.

// let arr = [1,2,3,4,5];
// console.log(...arr);


// function restOperator (a,b, ...arr1) {
//     console.log(a, b, arr1);
//     // ...arr1 restoperator
// }

// restOperator(1,2,3,4,5,6);

// let obj = {
//     fName: 'Binod',
//     lName: 'Kumar'
// }

// Type 1:
// console.log(obj.fName);
// console.log(obj.lName);

// Type 2:
// const {fName, lName} = obj;

// console.log(obj.fName);
// console.log(obj.lName);
// ============================

// call:
// let obj = {
//     name:'Binod',
//     sayHi: function() {
//         console.log(`Hi from ${this.name}`);
//     }
// }
// obj.sayHi();

// let obj1 = {
//     name: 'Sowmya'
// }

// obj.sayHi.call(obj1);

// let obj = {
//     name: 'Husena'
// }
    
// function sayHi(args) {
//     // console.log(args[0], args[1]);
//     console.log(`Hi from ${this.name} from ${args[0]} ${args[1]}`)
// }
// // sayHi.call(obj, 'Bangalore', 'Horamavu');

// //apply:
// let address = ['Bangalore', 'Horamavu'];
// // sayHi.apply(obj, address)

// // bind:

// let sayHiAdd = sayHi.bind(obj);
// sayHiAdd(address);


function add(...args) {
    console.log(args);
}

add(1,2,3,4,5);


