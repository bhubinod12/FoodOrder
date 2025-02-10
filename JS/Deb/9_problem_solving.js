/**
 * Check number if its prime or not
 */

// 3-> 1,3
// 4-> 1, 2, 4
// 9-> 1,3,9
// 6-> 1,2,3,6
// 2-> 1,2

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 -> prime numbers

function isPrime(num) {
    let factCount = 0;
    if (num <= 1) {
        return false;
    }
    for (let i = 1; i <=num; i++) {
        if (num % i ==0) {
            factCount++;
            if (factCount > 2) {
                return false
            } 
        }
    }
    return true;
}

console.log(isPrime(1));

// Find the total number of factors of a number
