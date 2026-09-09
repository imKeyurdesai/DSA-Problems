/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
    if (n < 1000) {
        return 0;
    }

    let power = 1000;
    let groups = 1;

    while (power <= Math.floor(n / 1000)) {
        power *= 1000;
        groups++;
    }

    let result = groups * (n - power + 1);
    let currentPower = 1000;

    for (let i = 1; i < groups; i++) {
        result += 999 * currentPower * i;
        currentPower *= 1000;
    }

    return result;
};

const n = 1003
console.log(countCommas(n))