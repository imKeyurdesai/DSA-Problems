/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0
    let right = numbers.length - 1
    while (left < right) {
        const sum = numbers[left] + numbers[right]
        if (sum === target) {
            return [left + 1, right + 1]
        }
        else if (sum < target) {
            left++
        }
        else if (sum > target) {
            right--
        }

    }
    return [left + 1, right + 1]
};

let numbers = [2, 7, 11, 15, 54];
let target = 9;
console.log(twoSum(numbers, target))