let a = [1,2,5,4,[2,[10],9],3];

// function falattenArr (arr) {
//     let len = arr.length;
//     let ansArr = [];
//     for (let i = 0; i < len; i++) {
//         if (!Array.isArray(arr[i])) {
//             ansArr.push(arr[i]);
//         } else {
//             let tempArr = falattenArr(arr[i]);
//             ansArr.push(...tempArr);
//         }
//     }
//     return ansArr;
// }
// console.log(falattenArr(a));

