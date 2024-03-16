const arr = [2,1,3,5,6,6];
let obj = {};
function secondLargest (arr) {
    
    let len = arr.length;
    let max = Number.MIN_SAFE_INTEGER;
    let maxIndex = -1;
    for (let i = 0; i < len; i++) {
        if (max < arr[i]) {
            max = arr[i];
            maxIndex = i;
        }
    }
    
    return max;
}
console.log(secondLargest(arr));