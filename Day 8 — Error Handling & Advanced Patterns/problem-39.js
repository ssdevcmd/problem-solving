//Problem 39: Flatten Object (Deep)  [Medium]
//Description: Write a function flattenObject(obj) that takes a deeply nested object and returns a flat object with dot-notation keys.
//Example:
//Input: {a: {b: {c: 1}}}Output: {'a.b.c': 1}
//Hint: Use recursion; build the key by joining parent keys with dots.


function flattenObject(obj, parentKey = '', result = {}) {
    for (const key in obj) {
        if (obj.prototype.hasOwnProperty.call(obj, key)) {
            const newKey = parentKey? `${parentKey}.${key}` : key;
            const value = obj[key];

            // Check if value is a plain object (and not null or an array)
            if(
                typeof value === 'object' && 
                value !== null  && 
                !Array.isArray(value) && 
                Object.keys(value).length > 0
            ) {
                flattenObject(value, newKey, result);
            } else {
                result[newKey] = value;
            }
        }
    }

    return result;
}


// Example 1: Deeply nested structure
const input1 = { a: { b: { c: 1 } } };
console.log(flattenObject(input1));
// Output: { 'a.b.c': 1 }

// Example 2: Multiple properties and mixed primitive values
const input2 = {
  user: {
    name: "John",
    address: {
      city: "New York",
      zip: 10001
    }
  },
  active: true,
  roles: ["admin", "user"]
};

console.log(flattenObject(input2));
/*
Output:
{
  'user.name': 'John',
  'user.address.city': 'New York',
  'user.address.zip': 10001,
  'active': true,
  'roles': ['admin', 'user']
}
*/