function promiseFn () {
    return new Promise(function(resove, rejext) {
        resove(100);
    })
}
promiseFn().then((res) => {
    console.log(res)
})

let responseData = promiseFn();
responseData.then((res) => {
    console.log(res);
})