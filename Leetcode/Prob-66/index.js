/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let last_element = digits.length - 1
    let carry = true

    while (carry && last_element >= 0) {
        digits[last_element] = (digits[last_element] + 1) % 10
        if (digits[last_element] !== 0) {
            carry = false
            return digits
        }

        last_element = last_element - 1
    }
    if (last_element === -1) {
        digits.unshift(1)
    }
    return digits
};

const number = [9, 9, 9, 9]
console.log(plusOne(number))