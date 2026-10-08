//Problem 47: Longest Word in a Sentence  [Easy]
//Description: Write a function longestWord(sentence) that returns the longest word in a sentence. If there's a tie, return the first one.
//Example:
//Input: 'The quick brown fox'Output: 'quick'
//Hint: Split the sentence and use reduce() to track the longest.


function longestWord(sentence) {
    if(!sentence.trim()) return '';
    const words = sentence.trim().split(/\s+/);

    return words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, '');
};

console.log(longestWord('The quick brown fox'));