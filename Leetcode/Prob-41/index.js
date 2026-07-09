/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let set = new Set();
    let minimumInt = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0 && !set.has(nums[i])) {
            set.add(nums[i])
        }
    }
    while(set.has(minimumInt)){
        ++minimumInt
    }
    return minimumInt
};

const nums = [7,8,9,11,12]
console.log(firstMissingPositive(nums))