//Problem 31: Debounce Function  [Medium]
//Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called.
//Example:
//const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms
//Hint: Use clearTimeout and setTimeout.


function debounce(fn, delay){
    let timer = null;

    return function(...args){
        clearTimeout(timer);

        timer = setTimeout(()=>{
        fn.apply(this, args);
    }, delay);
    }
    
}


const search = (query) => console.log('Search Query:', query);
const debouncedSearch = debounce(search, 300);

debouncedSearch('React');