//Problem 14: Flatten a Nested Array  [Medium]
//Description: Write a function flattenArray(arr) that flattens one level of a nested array.
//Example:
//Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
//Hint: Use flat() or reduce() with concat().

function flattenArray(arr){
    return arr.flat(1)
}

console.log(flattenArray([1, [2, 3], [4, 5]]));


// reduce() with concat()
function flattenArray(arr){
    const newArray = arr.reduce((acc, currentArray) => {
        return acc.concat(currentArray);
    }, [])
    return newArray;
}

console.log(flattenArray([1, [2, 3], [4, 5]]));