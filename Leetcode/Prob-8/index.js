/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let index = 0
    let sign = 1
    let result = 0

    while (index < s.length && s[index] === ' ') {
        index++
    }

    if (index < s.length && (s[index] === '+' || s[index] === '-')) {
        sign = s[index] === '-' ? -1 : 1
        index++
    }

    while (index < s.length) {
        const code = s.charCodeAt(index)

        if (code < 48 || code > 57) {
            break
        }

        result = result * 10 + (code - 48)

        if (sign === 1 && result > 2147483647) {
            return 2147483647
        }

        if (sign === -1 && -result < -2147483648) {
            return -2147483648
        }

        index++
    }

    return sign * result
};

const s = "   -042"
console.log(myAtoi(s))