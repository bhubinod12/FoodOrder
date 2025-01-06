/*
let fs = require('fs');
let promise = fs.promises.readFile('./f1.txt');


async function getData() {
    try{
        // let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let response = await promise;
        // let data = await response.json();
        console.log(response+"");
    } catch(err){
        console.log(err);
    }
}
getData();
*/

async function getData() {
    return 14;
}

let a = await getData();

console.log(a);

