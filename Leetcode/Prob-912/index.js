/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    let res = []
    const merge = (left, right) => {
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                res.push(left[i])
                i++
            } else {
                res.push(right[j])
                j++
            }
        }
        while (i < left.length) {
            res.push(left[i])
            i++
        }
        while (j < right.length) {
            res.push(right[j])
            j++
        }
        return res
    }

    if (nums.length <= 1) {
        return nums
    }
    const mid = Math.floor(nums.length / 2)
    const arr1 = sortArray(nums.slice(0, mid))
    const arr2 = sortArray(nums.slice(mid))
    return merge(arr1, arr2)
};

const nums = [5,1,1,2,0,0]
console.log(sortArray(nums))