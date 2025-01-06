function mapFunc (arr) {
    let n = arr.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) +1);
        } else {
            map.set(arr[i], 1);
        }
    }
    return map;
}
let arr = [1,2,1,2,3,4,5,5]
console.log(mapFunc(arr));