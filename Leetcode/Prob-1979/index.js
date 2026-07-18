/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = a % b
            a = b
            b = temp
        }
        return a
    }
    if (nums.length < 1) {
        return 1
    }
    let smallest = nums[0]
    let largest = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < smallest) {
            smallest = nums[i]
        } if (nums[i] > largest) {
            largest = nums[i]
        }
    }

    return gcd(smallest, largest)
};

const nums = [7]
console.log(findGCD(nums))