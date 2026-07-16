/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function (nums) {
    let res = []
    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = a % b
            a = b
            b = temp
        }
        return a
    }
    let prefixMax = 0
    for (let i = 0; i < nums.length; i++) {
        prefixMax = Math.max(prefixMax, nums[i])
        res.push(gcd(nums[i], prefixMax))
    }
    res.sort((a, b) => a - b);
    let left = 0;
    let right = res.length - 1;
    let sum = 0;
    while (left < right) {
        let temp = gcd(res[left], res[right]);
        sum += temp;
        left++;
        right--;
    }
    return sum
};

const nums = [3, 6, 2, 8]
console.log(gcdSum(nums))