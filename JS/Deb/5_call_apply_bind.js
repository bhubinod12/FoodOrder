// console.log('JS/Deb/5_call_apply_bind.js');

/**
 * Hoisting
 */


// console.log(a);

// var a = 20; // undefined
// var b; // undefined
// var c= 10;

// console.log(d);
// let d;
// function Hoisting() { // memory allocation
//     console.log('Hoisting == '+  c);
// }

// Hoisting();

/**
 * Call:
 */

// let obj1 = {
//     name: 'Deb',
//     sayHi: function() {
//         console.log('Hi '+ this.name);
//     }
// }

// obj1.sayHi();

// let obj2 = {
//     name: 'John',
//     sayHi: function() {
//         console.log('Hi '+ this.name);
//     }
// }

// obj2.sayHi();

// let obj2 = {
//     name: 'John'
// }

// obj1.sayHi.call(obj2);

/**
 * call
 */
// function sayHi(city, country) {
//     console.log('Hi '+ this.name + ' from '+ city + ', '+ country);
// }


// // let obj1 = {
// //     name: 'Deb'
// // }

// // let obj2 = {
// //     name: 'John'
// // }

// sayHi.call(obj1, 'Kolkata', 'India');
// // sayHi.call(obj2, 'Delhi',   'India');

/**
 * apply
 */

// function sayHi(...args) {
//     console.log(city , args);
//     console.log('Hi '+ this.name + ' from '+ args[0] + ', '+ args[1]);
// }


// let obj1 = {
//     name: 'Deb'
// }

// let obj2 = {
//     name: 'John'
// }
// let arr = ['Kolkata', 'India'];

// sayHi.apply(obj1, arr);
// sayHi.apply(obj2, arr);


// let arr1 = [1,2,3,4,5];
// console.log(...arr1);

/**
 * bind
 */

// let obj1 = {
//     name: 'Deb',
//     sayHi: function() {
//         console.log('Hi '+ this.title);
//     }
// }

// let obj2 = {
//     title: 'move next page'
// }
// let bindMethod = obj1.sayHi.bind(obj2);

// bindMethod();


// let ansArr = [];
// function sumofnum(num) {
//     for (i=0; i<num.length; i++) {
//         for(j=i+1; j<num.length; j++) {
//             if (num[i]+num[j] === 0) {
//                 ansArr.push([num[i], num[j]]);
//             }
//         }
//     }
//     return ansArr;
// }
// let num = [1,2,3,-1,-2,-3];
// console.log(sumofnum(num));

// let ansArr = [];
// function sumofnum(num) {
//     for (i=0; i<num.length; i++) {
//         for(j=i+1; j<num.length; j++) {
//             if (num[i]+num[j] === 0) {
//                 ansArr.push([num[i],num[j]]);
//             }
//         }
//     }
//     return ansArr;
// }
// let num = [1,2,3,-1,-2,-3];
// console.log(sumofnum(num));





// why use case of bind , apply , call -> borrow features 

let cap = {
    name: 'Binod',
    team: 'Cap',
    petersTeam: function(mem1, mem2, mem3) {
        // console.log(mem1, mem2);
        console.log(`Hey ${this.name} I am your neighborhood's 
        spiderman and i belong to ${this.team}'s team with members ${mem1} ${mem2} ${mem3}`);
    }
}

let ironMan = {
    name: 'Tony',
    team: 'Iron Man'
}

// cap.petersTeam('ironMan', 'petersMan');

// borrow the method only once with defined number of param 
// use petersTeam method -> only once 

// cap.petersTeam.call(ironMan, 'ironMan', 'petersMan');

/****
 * 
 * Apply: borrow the method only once with n no number of param 
 * **/

// let membersArray=["thor", "loki"]

cap.petersTeam.apply(ironMan, ["thor", "loki", "hulk"]);

// cap.petersTeam.apply(ironMan, membersArray);

/*****
 * bind : making permanent copy of that method to use multiple times
 * ******/

// let membersArray=["thor", "loki"];
// const bindFn = cap.petersTeam.bind(ironMan);

// bindFn("cap", "war machine");

// let arr=[] -> Array
// let obj ={} -> Object
// function fn(){} -> Functions




