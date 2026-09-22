/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);

        if (arr[mid] < arr[mid + 1]) {
            l = mid + 1;
        }
        else {
            r = mid;
        }
    }
    return l;
};

const arr = [0,2,1,0]
console.log(peakIndexInMountainArray(arr))