/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []

    for (const element of s) {
        let top = stack.length - 1
        if (element === '(' || element === '{' || element === '[') {
            stack.push(element)
        }
        else if ((element === ')' && stack[top] !== '(') || (element === '}' && stack[top] !== '{') || (element === ']' && stack[top] !== '[')) {
            return false
        }else{
            stack.pop()
        }
    }
    return true
};

const s = "([)]"
console.log(isValid(s))