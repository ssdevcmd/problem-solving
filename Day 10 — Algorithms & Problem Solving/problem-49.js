//Problem 49: Roman to Integer  [Medium]
//Description: Write a function romanToInt(s) that converts a Roman numeral string to an integer.
//Example:
//Input: 'III'  → Output: 3 Input: 'IX' → Output: 9 Input: 'LVIII' → Output: 58
//Hint: Map each symbol to its value; if a smaller value comes before a larger one, subtract it.


function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];
        const value = romanMap[char];

        if (value < prevValue) {
            total -= value;
        } else {
            total += value;
        }

        prevValue = value;
    }

    return total;
};

console.log(romanToInt('III'));
console.log(romanToInt('IX'));