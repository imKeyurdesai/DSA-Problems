/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
    costs.sort((a, b) => a - b)
    let i = 0
    let count = 0
    while (coins > 0 && i < costs.length) {
        if (coins - costs[i] < 0) break;
        coins -= costs[i]
        count++
        i++
    }
    return count
};

const costs = [1, 3, 2, 4, 1], coins = 7
console.log(maxIceCream(costs, coins))