/** array is an object */
console.log('Hello');

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

//  it gives you the copy
// params -> starting index , ending index
// it copies the elem from  si to ei - 1

// let slicedArr = arr.slice(2, 4);
// console.log(slicedArr);
// let slicedArr1 = arr.slice(2, 5);
// console.log(slicedArr1);
// slicedArr1.push(10);
// console.log(slicedArr1);
// console.log(arr)

// modifies the original array
// params -> starting index , delete count
// console.log("slicedArr: ", slicedArr);

// let splicedArr = arr.splice(2, 3);
// console.log("splicedArr: ", arr,splicedArr);

// let arr1 = [100,200,300,400,500,600,700,800,900];
// let splicedArr = arr1.splice(2,4);
// console.log(splicedArr, arr1);

/**concat*/
// It concat a two array without chainging the original array
console.log(arr.concat([100,200,300]));
console.log("arr",arr);

// split and join 
// split splits a string into an array of string 
// with the use of a delimiter 

let str = " Hi i am google  ".trim();
console.log(str);
let arrStr = str.split(" ");
console.log(arrStr);
// joins the array of string into  string on the basis of delimiter
console.log("join==", arrStr.join('+'));
console.log(arrStr.join(','))

