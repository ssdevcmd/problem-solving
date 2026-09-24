//Problem 35: Implement Array.prototype.map from Scratch  [Medium]
//Description: Write a function myMap(arr, callback) that replicates the behavior of Array.prototype.map without using the built-in map().
//Example:
//myMap([1,2,3], x => x * 2);// Output: [2, 4, 6]
//Hint: Loop through the array, apply the callback to each //element, push results to a new array.


function myMap(arr, callback){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

const nums = [1, 2, 3];
const doubled = nums.myMap(x => x * 2);
console.log(doubled);