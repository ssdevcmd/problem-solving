//Problem 15: Chunk an Array  [Medium]
//Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
//Example:
//Input: [1,2,3,4,5], 2  → Output: [[1,2],[3,4],[5]]

function chunkArray(arr, size){
    const chunkedArray = [];
    for(let i = 0; i < arr.length; i += size){
        chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));