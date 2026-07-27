/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    if (nums.length < 2) {
        return;
    }
    if (nums.length === 2) {
        return ((nums[0] - 1) * (nums[1] - 1))
    }
    let max = nums[0]
    let secondMax = -Infinity

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            secondMax = max
            max = nums[i]
        } else if (nums[i] > secondMax) {
            secondMax = nums[i]
        }
    }
    return ((max - 1) * (secondMax - 1))
};

let nums = [1,2,3,5]
console.log(maxProduct(nums))