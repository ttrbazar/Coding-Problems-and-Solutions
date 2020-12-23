// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
// A subsequence of an array is a set of numbers that aren’t necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1,3,4] form a subsequence of the array [1,2,3,4], and so do the numbers [2,4]. Note that a single number in an array and the array itself are both valid subsequences of the array.
// Example:
// array=[5, 1, 22, 25, 6, -1, 8, 10]
// testArray=[1, 6, -1, 10]
// Output: true

const isSubsequence = (arr1, arr2) => {

    // create hash table for values and indices of first array.
    const firstArrayMap = {};
    arr1.forEach((element, index) => {
        if (firstArrayMap[element]) {
            firstArrayMap[element].push(index);
        } else {
            firstArrayMap[element] = [index];
        }
    });

    // test if second array is subsequence of first array
    let currentIndex = -1;
    for (let element of arr2) {
        if (firstArrayMap[element]) {
            currentIndex = firstArrayMap[element].find(item => item > currentIndex);
            if (currentIndex === undefined) return false;
        } else return false;
    }

    return true;
}

const containerArray = [1, 2, 2, 2, 2, 2, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 22, 1, 25, 6, 1, -1, 1, 10, 33, 22, 11];
const testArray = [1, 3, 2, 2, 2, 2, 2, 1, 6, -1, 10, 11];

console.log(isSubsequence(containerArray, testArray));
