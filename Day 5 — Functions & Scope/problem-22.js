//Problem 22: Fibonacci Sequence  [Easy]
//Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.
//Example:
//Input: 6  → Output: 8 (0,1,1,2,3,5,8...)
//Hint: Try both iterative and recursive approaches.


// recursive approach
function fibonacci(n){
    if(n <= 0) return 0;
    if(n === 1) return 1;
   
        return  fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(6));

// iterative approach
function fibonacci(n){
    if(n <= 0) return 0;
    if(n === 1) return 1;

    let prev = 0;
    let curr = 1;

    for(let i = 2; i <= n; i++){
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

console.log(fibonacci(6));
