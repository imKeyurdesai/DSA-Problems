/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let sum = 0
    for (let index = 1; index < s.length; index++) {
        const element =  Math.abs(s.charCodeAt(index) - s.charCodeAt(index - 1))
        sum += element
    }
    return sum
};

const s = "hello"
console.log(scoreOfString(s))