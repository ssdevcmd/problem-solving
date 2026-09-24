//Problem 33: Deep Clone an Object  [Medium]
//Description: Write a function deepClone(obj) that returns a deep copy of a plain object without using JSON.parse/JSON.stringify.
//Example:
//const a = {x: {y: 1}};const b = deepClone(a);b.x.y = 99;// a.x.y is still 1
//Hint: Use recursion and check for object/array types.


function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    const clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}

// --- Test Case ---
const a = { x: { y: 1 } };
const b = deepClone(a);

b.x.y = 99;

console.log("Original a.x.y:", a.x.y);
console.log("Cloned b.x.y:", b.x.y);   