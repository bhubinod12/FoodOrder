console.log('Flatten Array');

// input  -> nested array
// let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];

// output -> single level of array with num 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// [4, 5] -> [4,5]
// [6, 7, 8, [9, 10, 11]] -> [6, 7, 8, 9, 10, 11]

function FlattenArray (srcArr) {
    let newArr = [];
    for (let i = 0; i < srcArr.length; i++) {
        // check if element is array -->
        let elem = srcArr[i];
        let isElemArr = Array.isArray(elem);
        if (isElemArr) {
            // flatten it again:
            let smalleFlattenArr = FlattenArray(elem);
            newArr.push(...smalleFlattenArr);
        } else {
            newArr.push(elem);
        }
    }
    return newArr;
}

// let flattenedArr = FlattenArray(input);
// console.log(flattenedArr);

/**
 * Question  -> Array.protype.flat()  -> flatten fn -> option of levels also
 * */

let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];
let flattenOutput1 = input.flat(1);
console.log(flattenOutput1);
let flattenOutput2 = input.flat(2);
console.log(flattenOutput2);
let flattenOutputInfinity = input.flat(Infinity);
console.log(flattenOutputInfinity);

/**
 * simple deep clone/copy
 * deep copy /clone with nested objects and array
 * flatten an array 
 * Array.prototype.flat()
 * flatten an object
 * */

let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA',
        postCodes: {
            firstBlock: 10,
            secondBlock: 12
        }
    }
}

person = {
    firstName: 'John',
    lastName: 'Doe',
    "address.street": 'North 1st street',
    "address.city": 'San Jose',
    "address.state": 'CA',
    "address.country": 'USA',
    "address.postCodes.firstBlock": 10,
    "address.postCodes.secondBlock": 12
}