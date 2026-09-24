/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let number = nums[i];
        let sum = 0
        while (number > 0) {
            let temp = number % 10;
            sum += temp
            number = Math.floor(number / 10)
        }
        if (sum === i) {
            return i
        }
    }
    return -1
};

const nums = [1, 3, 2]
console.log(smallestIndex(nums))