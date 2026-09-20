//Problem 19: Invert an Object  [Easy]
//Description: Write a function invertObject(obj) that swaps the keys and values of an object.
//Example:
//Input: {a: 1, b: 2}  → Output: {1: 'a', 2: 'b'}
//Hint: Use Object.entries() and reduce().

function invertObject(obj){
    return Object.entries(obj).reduce((acc, [key, value])=>{
        acc[value] = key;
        return acc;
    }, {});
}

console.log(invertObject({a:1, b:2}));