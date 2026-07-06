/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let nums = x.toString().split('')
    let left = 0
    let right = nums.length - 1
    while(left < right){
        if(nums[left] !== nums[right]){
            return false
        }
        left++
        right--
    }
    return true
};

// console.log(isPalindrome(121121))