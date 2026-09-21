//Problem 18: FizzBuzz  [Easy]
//Description: Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.
//Example:
//Input: 15; Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
//Hint: Check divisibility with the % operator in the right order.

function fizzBuzz(n){
    for(let i= 1; i <= n; i++){
        if(i % 3 ===0 && i % 5 ===0){
            console.log('FizzBuzz');
        }
        else if(i % 3 ===0){
            console.log('Fizz');
        }
        else if(i % 5 ===0){
            console.log('Buzz');
        }
        else{
            console.log(i);
        }
    }
}

fizzBuzz(15);