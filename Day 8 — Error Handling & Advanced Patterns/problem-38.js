//Problem 38: Implement Promise.all from Scratch  [Hard]
//Description: Write a function myPromiseAll(promises) that behaves like Promise.all — resolves with an array of results when all resolve, rejects immediately if any rejects.
//Example:
//myPromiseAll([p1, p2, p3]).then(results => console.log(results));
//Hint: Track resolved count and results array; reject on first failure.


function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let resolvedCount = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((result) => {
                results[index] = result;
                resolvedCount++;

                if (resolvedCount === promises.length) {
                    resolve(results);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    });
}

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
myPromiseAll([p1, p2, p3]).then(results => console.log(results));