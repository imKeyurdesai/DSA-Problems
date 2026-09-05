/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
    let max = nums[0]
    let min = new Array(nums.length)
    min[nums.length - 1] = nums[nums.length - 1]

    for (let j = nums.length - 2; j >= 0; j--) {
        min[j] = Math.min(min[j + 1], nums[j])
    }

    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i])

        if (max - min[i] <= k) return i
    }
    return -1
};

const nums = [10, 5, 15, 0, 20], k = 10
console.log(firstStableIndex(nums, k))