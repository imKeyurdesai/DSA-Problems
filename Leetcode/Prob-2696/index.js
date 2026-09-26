/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    let stack = []
    for (let i = 1; i < s.length; i++) {
        if (s[i] === 'B' && s[i - 1] === 'A') {
            stack.pop()
        }
        if (s[i] === 'D' && s[i - 1] === 'C') {
            stack.pop()
        } else {
            stack.push(stack[i])
        }
    }
    return stack.length
};

const s = "ABFCACDB"
console.log(minLength(s))