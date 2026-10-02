//Problem 42: Check Anagram  [Easy]
//Description: Write a function isAnagram(str1, str2) that returns true if the two strings are anagrams of each other.
//Example:
//Input: 'listen', 'silent'  → Output: true
//Input: 'hello', 'world'   → Output: false
//Hint: Sort both strings and compare, or use a character frequency map.


// Method 1: Character Frequency Map
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = {};

  // Count character frequencies for str1
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrement character frequencies for str2
  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

// Method 2: Sorting
function isAnagramSort(str1, str2) {
  if (str1.length !== str2.length) return false;

  const normalize = (str) => str.split('').sort().join('');
  return normalize(str1) === normalize(str2);
}

console.log(isAnagramSort('listen', 'silent')); // Output: true
console.log(isAnagramSort('hello', 'world'));   // Output: false