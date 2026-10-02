/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let intersection = []

        for (let i = 0; i < nums1.length; i++) {
            const element = nums1[i]
            for (let j = 0; j < nums2.length; j++) {
                let number = nums2[j]
                if(number === element && !intersection.includes(element)){
                    intersection.push(number)
                }
            }
        }  
        return intersection
};

const nums1 = [1,2,2,1], nums2 = [2,2]
console.log(intersection(nums1,nums2))