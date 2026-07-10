/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let positive = 0;
    let negative = 0;

    if (nums.length === 0) {
        return -1
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            positive++
        }
        else if (nums[i] < 0) {
            negative++
        }
    }
    return Math.max(positive, negative)
};

// const nums = [-2, -1, -1, 1, 2, 3]
// console.log(maximumCount(nums))