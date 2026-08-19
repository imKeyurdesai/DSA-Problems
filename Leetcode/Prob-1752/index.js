var check = function(nums) {
    let breaks = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[(i + 1) % n]) {
            breaks++;
        }
    }

    return breaks <= 1;
};

// let nums = [3, 4, 5, 1, 2]
let nums = [2, 1, 3, 4]
console.log(check(nums))