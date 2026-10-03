//Problem 44: Valid Parentheses  [Medium]
//Description: Write a function isValidParentheses(str) that returns true if the string has valid, balanced parentheses, brackets, and braces.
//Example:
//Input: '()[]{}'  → Output: true;  Input: '([)]'    → Output: false
//Hint: Use a stack (array). Push opening brackets, pop and compare for closing ones


function isValidParentheses(str) {
    const stack = [];
    const map = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    for(let char of str) {
        if(char in map) {
            const topElement = stack.length > 0 ? stack.pop() : '#';

            if(topElement !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }

    }

    return stack.length === 0;
}

console.log(isValidParentheses('()[]{}'));
console.log(isValidParentheses('([)]'));
console.log(isValidParentheses('{[]}'));
console.log(isValidParentheses('('));