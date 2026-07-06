/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let rev = 0
    let multiplier = 1
    if(x < 0){
        multiplier = -1
        x = x*multiplier
    }
    while (x !== 0) {
        let temp = x % 10
        rev = rev * 10 + temp
        x = Math.floor(x/10)
    }
    if(rev > (-Math.pow(2,31)) && rev < (Math.pow(2,31) -1)){
        return rev*multiplier
    }
    return 0
};

// const res = reverse(153423646)
// console.log(res)