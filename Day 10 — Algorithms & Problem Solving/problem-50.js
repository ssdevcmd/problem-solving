//Problem 50: Pascal's Triangle Row  [Medium]
//Description: Write a function pascalRow(n) that returns the nth row of Pascal's Triangle as an array.
//Example:
//Input: 0  → Output: [1]Input: 3  → Output: [1,3,3,1]Input: 4  → Output: [1,4,6,4,1]
//Hint: Each element is the sum of the two elements above it from the previous row.


function pascalRow(n) {
    let currentRow = [1];

    for (let i = 1; i <= n; i++) {
        const nextRow = [1];

        for (let j = 0; j < currentRow.length -1; j++) {
            nextRow.push(currentRow[j] + currentRow[j + 1]);
        }

        nextRow.push(1);
        currentRow = nextRow;
    }

    return currentRow;
}

console.log(pascalRow(0));
console.log(pascalRow(3));
console.log(pascalRow(4));