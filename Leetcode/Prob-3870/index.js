/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
    if(n < 1000) return 0;

    return n - 1000 + 1;

};

const n = 1002
console.log(countCommas(n))