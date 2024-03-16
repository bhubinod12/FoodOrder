function MemoizeFn () {
    let cache = {};

    return function (num) {
        if (num in cache) {
            console.log('Value is cached');
            return cache[num];
        } else {
            console.log('Not cached so need to store the value');
            cache[num] = num+256;
            return cache[num];
        }
    }
}

let ansWer = MemoizeFn();
console.log(ansWer(20));
console.log(ansWer(20));
console.log(ansWer(10));
console.log(ansWer(10));