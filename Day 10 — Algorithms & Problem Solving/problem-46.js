//Problem 46: Count Words in a Sentence  [Easy]
//Description: Write a function wordCount(sentence) that returns an object with each word as a key and its frequency as the value.
//Example:
//Input: 'the cat sat on the mat'Output: {the: 2, cat: 1, sat: 1, on: 1, mat: 1}
//Hint: Split by spaces, then reduce into a frequency object.


function wordCount(sentence) {
    if(!sentence.trim()) return {};

    const words = sentence.trim().split(/\s+/);

    return words.reduce((acc, word) => {
        const cleanWord = word.toLowerCase();
        acc[cleanWord] = (acc[cleanWord] || 0) + 1;
        
        return acc;
    }, {});
};

console.log(wordCount('the cat sat on the mat'));