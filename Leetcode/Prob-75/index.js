/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[j] < nums[minIndex]){
                minIndex = j
            }
        }
        [nums[i],nums[minIndex]] = [nums[minIndex],nums[i]]
    }
    return nums
};

const nums = [9,8,8,7,4,2,0]
console.log(sortColors(nums))