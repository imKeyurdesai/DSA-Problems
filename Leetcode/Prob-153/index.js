/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if(nums.length === 1) return nums[0]

    for (let i = 0; i < nums.length - 1; i++) {
        if(nums[i] > nums[i+1]){
            return nums[i + 1]
        }
    }
    return nums[0]
};

const nums = [3, 4, 5, 1, 2]
console.log(findMin(nums))