/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let set = new Set(nums)
    let multiplier = 1
    while(true){
        const element = k*multiplier
        if(!set.has(element)){
            return element
        }
        multiplier++
    }
};

const nums = [8,2,3,4,6]
const k = 2
console.log(missingMultiple(nums,k))