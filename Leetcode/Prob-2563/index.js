/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
    let count = 0;
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j]
            if (lower <= sum && sum <= upper) {
                count++
            }
            if (sum > upper){
                break;
            }
        }
    }
    return count
};

const nums = [0, 1, 7, 4, 4, 5], lower = 3, upper = 6
console.log(countFairPairs(nums, lower, upper))