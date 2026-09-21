//Problem 3: Find the Largest of Three Numbers  [Easy]
//Description: Write a function largest(a, b, c) that returns the largest of three numbers.
//Example:
//Input: 3, 7, 5  → Output: 7
//Hint: Use Math.max() or if-else conditions.


// Math.max()
function largest(a, b, c){
  return Math.max(a, b, c)
}


console.log(largest(3,7,5));

//if-else conditions
function biggest(d, e, f){
    if(d >= e && d >= f){
        return d;
    }
    else if(e >= d && e >=f){
        return e;
    }
    else{
        return f;
    }
}

console.log(biggest(1,9,2));