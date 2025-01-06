function Add(ans, val) {
    ans = ans+val;
    return ans;
}
function multiPly (ans, val) {
    ans = ans * val;
    return ans;
}
let arr = [1,2,3,4,5];
let len = arr.length;
function HOC (fn, initialVal) {
    let ans = arr[0];
    console.log('This is HOC function!!!');
    for (let i = 0; i < len; i++) {
        ans = fn(ans, arr[i]);
    }
    return ans;
}
console.log(HOC(Add, 0));
console.log(HOC(multiPly, 1));
