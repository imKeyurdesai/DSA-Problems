/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum = 0
    for(const ele of nums){
        sum += ele
    }
    return sum % k
};

const nums = [3,9,7], k = 5
console.log(minOperations(nums,k))