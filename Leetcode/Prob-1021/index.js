/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let res = "";
    let lvl = 0;
    for (const item of s) {
        if (item === '(' ? lvl++ : --lvl)
        res += item;
    }
    return res
};

const s = "(()())(())"
console.log(removeOuterParentheses(s))