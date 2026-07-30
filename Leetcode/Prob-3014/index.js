/**
 * @param {string} word
 * @return {number}
 */
const minimumPushes = A => {
    const q = A.length >> 3;
    const r = A.length & 7;
    return ((q << 2) + r) * (q + 1);
};

const word = 'xycdefghij'
console.log(minimumPushes(word))