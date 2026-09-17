//Problem 2: Check Even or Odd  [Easy]
//Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
//Example:
//Input: 4  → Output: true; Input: 7  → Output: false
//Hint: Use the modulus (%) operator.


function isEven(n) {
    const remainder = n % 2
    if (remainder === 0){
        return true;
    }
    else{
        return false;
    }
}


console.log(isEven(7));
console.log(isEven(4));