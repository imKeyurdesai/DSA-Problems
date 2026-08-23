/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
    let number = n
    let sum = 0
    let prod = 1
    while (number > 0) {
        let temp = number % 10
            sum += temp
            prod *= temp
        number = Math.floor(number/10)
    }
    if( n % (sum + prod) === 0){
        return true
    }
    return false
};

let n = 10
console.log(checkDivisibility(n))