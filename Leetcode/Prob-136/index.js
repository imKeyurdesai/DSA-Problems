/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = new Map()
    for (const element of nums) {
        map.set(element, (map.get(element) || 0) + 1)
    }
    for (const element of nums) {
        if(map.get(element) === 1){
            return element
        }
    }
    return map
};

const nums = [2, 2, 1]
console.log(singleNumber(nums))