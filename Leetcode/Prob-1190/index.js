/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    const stack = [];
    let current = "";

    for (const ch of s) {
        if (ch === '(') {
            stack.push(current);
            current = "";
        } else if (ch === ')') {
            current = stack.pop() + current.split('').reverse().join('');
        } else {
            current += ch;
        }
    }
    return current;
};

const s = "(ed(et(oc))el)"
console.log(reverseParentheses(s))