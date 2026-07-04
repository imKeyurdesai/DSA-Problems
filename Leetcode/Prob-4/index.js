/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const arr = [...nums1, ...nums2]
    let length = arr.length
    arr.sort((a, b) => a - b)
    if (length % 2 !== 0) {
        return arr[Math.floor(arr.length / 2)]
    }
    return (arr[length / 2] + arr[length / 2 - 1]) / 2
};

let arr1 = [2, 6]
let arr2 = [4, 8]
console.log(findMedianSortedArrays(arr1, arr2))