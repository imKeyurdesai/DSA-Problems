/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const lastSeenIndex = new Map()

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i]

        if (lastSeenIndex.has(value) && i - lastSeenIndex.get(value) <= k) {
            return true
        }

        lastSeenIndex.set(value, i)
    }

    return false
};

const nums = [-1, -1]
const k = 1
console.log(containsNearbyDuplicate(nums, k))