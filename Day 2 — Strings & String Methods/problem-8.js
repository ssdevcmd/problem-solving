
//Problem 8: Check Palindrome  [Easy]
//Description: Write a function isPalindrome(str) that returns
//true if the string reads the same forwards and backwards.
//Example:
//Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
//Hint: Compare the string to its reverse.

function isPalindrome(str){
    let Palindrome = '';
    for(let i = str.length- 1; i >= 0; i--) {
    Palindrome += str[i];
  }
  return str === Palindrome;
 
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));
