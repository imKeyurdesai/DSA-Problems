/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = new Map()
    let max = 0;
    let result
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], (map.get(nums[i]) + 1))
        } else {
            map.set(nums[i], 1)
        }
    }
    map.forEach((val, key) => {
        if (val > max) {
            max = val
            result = key
        }
    })
    return result
};

const arr = [2,2,1,1,1,2,2]
console.log(majorityElement(arr))