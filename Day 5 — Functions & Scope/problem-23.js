//Problem 23: Create a Counter with Closure  [Medium]
//Description: Write a function makeCounter() that returns an object with increment, decrement, and getCount methods using closure.
//Example:
//const c = makeCounter();c.increment(); c.increment();c.getCount(); // 2
//Hint: Use a variable inside the outer function that inner functions can access.


function makeCounter(){
    let count = 0;

   return {
    increment: function(){
        count ++;
        return count;
    },
    decrement: function(){
        count --;
        return count;
    },
    getCount: function(){
        return count;
    }
   }
}
const c = makeCounter();
c.increment();
c.increment();
console.log(c.getCount());

c.decrement();
console.log(c.getCount());