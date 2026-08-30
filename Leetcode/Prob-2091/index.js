/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
    const length = nums.length
    if (length === 1) {
        return 1
    }
    let minimum = 0
    let maximum = 0

    for (let index = 0; index < length; index++) {
        if (nums[index] < nums[minimum]) {
            minimum = index
        }
        if (nums[index] > nums[maximum]) {
            maximum = index
        }
    }

    const l = Math.min(minimum, maximum); 
    const r = Math.max(minimum, maximum); 

    return Math.min(r + 1, length - l, l + 1 + length - r);
};

const nums = [0, -4, 19, 1, 8, -2, -3, 5]
console.log(minimumDeletions(nums))