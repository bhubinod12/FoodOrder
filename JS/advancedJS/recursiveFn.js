let user = {
    name: 'John',
    address: {
        personal: {
            city: 'New York',
            country: 'USA'
        },
        offic: {
            city: 'London',
            country: 'UK',
            area: {
                street: 'Oxford Street',
                pincode: '123456'
            }
        }
    }
}
let finalObj = {};
let magic = (obj, parrent) => {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
           magic(obj[key], parrent + '_' + key);
        } else {
            finalObj[parrent + '_' + key] = obj[key];
        }
    }
    // console.log(finalObj);
    
}
magic(user, "user");
console.log(finalObj);