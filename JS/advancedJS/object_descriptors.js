// console.log('Object Descriptors');
/**
 * Meta data[object descriptors] of an object
 * Data
 * value-> value of the property
 * writable-> whether the property can be changed
 * enumerable-> whether the property is listed in loops
 * configurable-> whether the property can be deleted
 */
let obj = {
    name: 'John',
}

Object.defineProperty(obj, 'test', {
    value: 'fail',
    writable: false,
    enumerable: false,
});

Object.defineProperty(obj, 'pass', {
    value: 'Yes',
    writable: true,
    enumerable: true
});
// console.log(obj);
// console.log(obj.test);
// console.log(obj.pass);

for (let key in obj) {
    console.log(key);
}