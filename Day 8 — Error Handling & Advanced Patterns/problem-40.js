//Problem 40: Group Array by Property  [Medium]
//Description: Write a function groupBy(arr, key) that groups an array of objects by a given property key.
//Example:
//groupBy([{type:'fruit',name:'apple'},{type:'veg',name:'carrot'},{type:'fruit',name:'mango'}], 'type')// {fruit: [...], veg: [...]}
//Hint: Use reduce() and build an object where each key maps to an array.


function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        const groupKey = obj[key];

        if(!acc[groupKey]){
            acc[groupKey] = [];
        }

        acc[groupKey].push(obj);

        return acc;
    }, {})
}

// Example 1: Grouping items by category/type
const items = [
  { type: 'fruit', name: 'apple' },
  { type: 'veg', name: 'carrot' },
  { type: 'fruit', name: 'mango' }
];

console.log(groupBy(items, 'type'));
/*
Output:
{
  fruit: [
    { type: 'fruit', name: 'apple' },
    { type: 'fruit', name: 'mango' }
  ],
  veg: [
    { type: 'veg', name: 'carrot' }
  ]
}
*/

// Example 2: Grouping users by role
const users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
  { id: 3, name: 'Charlie', role: 'admin' }
];

console.log(groupBy(users, 'role'));
/*
Output:
{
  admin: [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 3, name: 'Charlie', role: 'admin' }
  ],
  user: [
    { id: 2, name: 'Bob', role: 'user' }
  ]
}
*/