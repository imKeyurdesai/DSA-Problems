/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
    const n = nums.length;
    const numSet = new Set(nums);
    let prefixLen = 1;

    for (let i = 1; i < n; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            prefixLen += 1;
        } else {
            break;
        }
    }

    let total = ((nums[prefixLen - 1] + nums[0]) * prefixLen) / 2;
    while (numSet.has(total)) {
        total += 1;
    }

    return total;
};

let nums = [29, 30, 31, 32, 33, 34, 35, 36, 37]
console.log(missingInteger(nums))