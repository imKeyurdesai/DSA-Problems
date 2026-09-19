/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans = []
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        ans[index] = nums[element]
    }
    return ans
};

const nums = [0,2,1,5,3,4]
console.log(buildArray(nums))