/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for (let i = m, j = 0; j < n; j++, i++) {
        nums1[i] = nums2[j]
    }
    nums1.sort((a, b) => a - b)
};

let nums1 = [1, 2, 3, 0, 0, 0]
let m = 3
let nums2 = [2, 5, 6]
let n = 3
merge(nums1, m, nums2, n)
console.log(nums1)