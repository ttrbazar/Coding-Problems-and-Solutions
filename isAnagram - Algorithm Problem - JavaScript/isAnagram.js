// A word is an anagram of another word if both use the same 
// letters in the same quantity, but arranged differently. 
// Write a function that checks if two provided strings 
//are anagrams of each other; letter casing shouldn’t matter. 
//Also, consider only characters, not spaces or punctuation. For example:
// anagram('finder', 'Friend')  --> true
// anagram('hello', 'bye') --> false

const isAnagram = (w1, w2) => {
    const w1Map = {};
    const w2Map = {};
    for (const ch of w1.match(/[A-Za-z]/gi)) {
        w1Map[ch.toLowerCase()] = 1 + (w1Map[ch.toLowerCase()] || 0);
    }
    for (const ch of w2.match(/[A-Za-z]/gi)) {
        w2Map[ch.toLowerCase()] = 1 + (w2Map[ch.toLowerCase()] || 0);
    }
    for (const [key, value] of Object.entries(w1Map)) {
        if (w2Map[key] !== value) return false;
        delete w2Map[key];
    }
    return Object.keys(w2Map).length === 0;
}

console.log(isAnagram("fin a .. d,e a Ar", "FA , ri--eaa1nd"));
console.log(isAnagram("hello", "bye"));