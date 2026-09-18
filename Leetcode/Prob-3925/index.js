/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    return [...nums , ...nums.reverse()]
};

const nums = [1,2,3]
console.log(concatWithReverse(nums))