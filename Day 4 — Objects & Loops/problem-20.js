 
//Problem 20: Find Duplicate Values in Array of Objects  [Medium]
//Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
//Example:
//Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
//Hint: Use a frequency map (object) to count occurrences.

function findDuplicateNames(arr){
    const counts = {};
    const duplicates = [];

    for(const item of arr){
        const name = item.name;
        counts[name] = (counts[name] || 0) + 1;
    }
    for (const name in counts) {
    if (counts[name] > 1) {
      duplicates.push(name);
    }
  }

  return duplicates;
}

const input = [{ name: 'Ali' }, { name: 'Sara' }, { name: 'Ali' }];
console.log(findDuplicateNames(input)); 

