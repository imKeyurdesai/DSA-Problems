/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
    if (nums.length === 0) {
        return []
    }

    let missing = []
    let smallest = Infinity
    let largest = -Infinity
    for (const element of nums) {
        if (element > largest) {
            largest = element
        }
        if (element < smallest) {
            smallest = element
        }
    }
    let set = new Set(nums)
    for (let i = smallest; i < largest; i++) {
        if(!set.has(i)){
            missing.push(i)
        }
    }
    return missing
};

const nums = [5, 1]
console.log(findMissingElements(nums))