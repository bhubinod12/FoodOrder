// let arr1 = [1,2,3,4,5];
// let arr2 = arr1;

// console.log(arr1); // [1,2,3,4,5]
// console.log(arr2); // [1,2,3,4,5]

// arr2[0] = 100;
// console.log(arr1); // [100,2,3,4,5]
// console.log(arr2); // [100,2,3,4,5]

// arr2 =10;

// console.log(arr1); // [100,2,3,4,5]
// console.log(arr2); // 10

// [][][]
function modifier(a, b) {
    console.log("9", a, b);
    a[0]= 10; // first try with value.
    b[1] = 20; // second try with value.
    console.log("12", a, b)
}
let p = [4, 7, 9]
let q = [3, 6, 8]
console.log("17", p, q);
modifier(p, q)

console.log("19", p, q);