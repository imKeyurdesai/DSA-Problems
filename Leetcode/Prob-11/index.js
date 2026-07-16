/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0
    let right = height.length - 1
    let max = 0

    if (left === right) {
        return 0;
    }

    while (left < right) {
        let min = Math.min(height[left], height[right]);
        let temp = (right - left) * min
        if (temp > max) {
            max = temp;
        }
        if (height[left] === min){
            left++
        }
        if(height[right] === min){
            right--
        }
    }
    return max
};

// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// console.log(maxArea(height))