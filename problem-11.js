//Problem 11: Find the Sum of an Array  [Easy]
//Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
//Example:
//Input: [1, 2, 3, 4, 5]  → Output: 15
//Hint: Use reduce() or a for loop.


// for loop
function sumArray(arr) {
    let number = 0;
    for (let i = 0; i < arr.length; i++) {
        number = number + arr[i];
    }
    return number;
}

console.log(sumArray([1, 2, 3, 4, 5]));


// reduce()
function numberArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(numberArray([10, 20, 30, 40, 50]));

// for..of loop(modern iteration)
function sumArray(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4]));