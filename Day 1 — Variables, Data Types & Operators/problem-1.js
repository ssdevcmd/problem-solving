// Problem 1: Swap Two Variables  [Easy]
//Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10; Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

 [destructuring] 

let a = 5;
let b = 10;

[ a,b ] = [ b,a ];

console.log(a);
console.log(b);

[arithmetic]

let c = 5;
let d = 10;

c += 5;
d -= 5;

console.log(c);
console.log(d);