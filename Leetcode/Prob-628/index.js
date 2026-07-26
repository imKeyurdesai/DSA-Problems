/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    if (nums.length === 3) {
        return nums[0] * nums[1] * nums[2]
    }
    nums.sort((a, b) => b - a)
    let ans1 = -Infinity
    if (nums[nums.length - 1] * nums[nums.length - 2] > 0) {
        ans1 = nums[0] * nums[nums.length - 1] * nums[nums.length - 2]
    }
    let ans2 = nums[0] * nums[1] * nums[2]
    return Math.max(ans1, ans2)
};

let nums = [-100, -2, -3, 1]
console.log(maximumProduct(nums))