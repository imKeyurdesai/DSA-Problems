/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let subset = [[]]
    for (let element of nums) {
        let length = subset.length;
        for (let i = 0; i < length; i++) {
            subset.push([...subset[i], element]);
        }
    }
    return subset
};

const nums = [1, 2, 3]
console.log(subsets(nums))