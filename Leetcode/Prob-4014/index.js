/**
 * @param {number[]} prices
 * @param {number[]} discounts
 * @return {number}
 */
var minPrice = function (prices, discounts) {
    prices.sort((x, y) => y - x)
    discounts.sort((x, y) => y - x)
    let sum = 0
    for (let i = 0,j = 0; i < prices.length; i++) {
        let discount = 1
        if(j < discounts.length){
            discount = (100 - discounts[j])/100
            j++
        }
        sum += prices[i]*discount
    }
    return sum
};

const prices = [10, 30, 21]
const discounts = [50, 60]
console.log(minPrice(prices, discounts))