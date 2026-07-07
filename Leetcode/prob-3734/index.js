/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function (n) {
    let str = n.toString()
    let num = []
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== '0' ){
            num += str[i]
            sum += Number(str[i])
        }
    }
    return num*sum
};

// let number = 1000
// console.log(sumAndMultiply(number))