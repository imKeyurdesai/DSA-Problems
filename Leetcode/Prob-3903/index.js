/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
    let max = nums[0]
    let min = 0

    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max,nums[i])
        min = Math.min(...nums.slice(i,nums.length))
        
        if(max - min <= k) return i
    }
    return -1
};

const nums = [10,5,15,0,20], k = 10
console.log(firstStableIndex(nums, k))