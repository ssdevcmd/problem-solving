//Problem 24: Curry a Function  [Medium]
//Description: Write a function curry(fn) that converts a function of two arguments into a curried version.
//Example:
//const add = curry((a,b) => a+b);add(2)(3); // 5
//Hint: Return a function from inside a function.


function curry(fn){
    return function(a){
        return function(b){
            return fn(a, b);
        }
    }
}

const add = curry((a, b) => a + b);
const result = add(2)(3);
console.log(result);