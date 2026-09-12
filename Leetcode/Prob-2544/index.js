/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    const arr = Array.from(n.toString(), Number)
    let sign = 1
    let sum = 0
    for (const element of arr) {
        sum += element*sign
        sign *= -1
    }
    return sum
};

const n = 521
console.log(alternateDigitSum(n))