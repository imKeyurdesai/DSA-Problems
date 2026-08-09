/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function (n, t) {
    let num = n
    let prod = 1
    while (prod % t !== 0) {
        let arr = Array.from(String(num), Number)
        prod = 1
        for (const element of arr) {
            prod *= element
        }
        if (prod % t === 0) {
            return num
        }

        num = num + 1
    }
    return num
};

let n = 10, t = 2
console.log(smallestNumber(n, t))