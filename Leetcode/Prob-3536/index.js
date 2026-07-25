/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
    if (n < 100) {
        let product = 1
        while (n > 0) {
            let temp = n % 10
            product *= temp
            n = Math.floor(n / 10)
        }
        return product
    }
    let arr = Array.from(n.toString(), Number)
    arr.sort((a, b) => b - a)
    return arr[0]*arr[1]
};

console.log(maxProduct(267))