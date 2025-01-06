// console.log('Hello');

// This object  -> copy of it 
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};

function superClone (obj) {
    // create new object
    let newObj = {}
    for (let key in obj) {
        let isKeyObj = typeof obj[key];
        if (isKeyObj == 'object') {
            let newSmallCopiedObj = superClone(obj[key]);
            newObj[key] = newSmallCopiedObj;
        } else {
            newObj[key] = obj[key];
        }
    }
    // console.log(newObj);
    return newObj;
}

let deeplyClonedObj = superClone(person);
deeplyClonedObj.lastName = "Odinson";
deeplyClonedObj.address.street = "south 1st street";
console.log("person ==", person);
console.log("copied object ==", deeplyClonedObj);

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
// };
