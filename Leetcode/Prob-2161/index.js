/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let left = []
    let right = []
    let p = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i])
        } else if (nums[i] > pivot) {
            right.push(nums[i])
        } else {
            p.push(pivot)
        }
    }
    left = [...left, ...p, ...right]
    return left
};

let nums = [9, 12, 5, 10, 14, 3, 10];
let pivot = 10;
console.log(pivotArray(nums, pivot));