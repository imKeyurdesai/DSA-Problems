/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function (n) {
    let oddsum = n * n;
    let evensum = n * (n + 1);
    let min = Math.min(oddsum, evensum)
    if (min === 0) {
        return Math.max(oddsum, evensum)
    }
    while (min > 0) {
        if (oddsum % min === 0 && evensum % min === 0) {
            return min
        }
        min--
    }
    return min

    //or 
    // return n
    //because gcd of n^2 and n * (n + 1) will be always n.another one will be 1
};

const n = 4
console.log(gcdOfOddEvenSums(n))