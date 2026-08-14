/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
    const freq = new Map();
    let left = 0;
    let ans = 0;

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];
        freq.set(ch, (freq.get(ch) || 0) + 1);

        while (freq.get(ch) > 2) {
            const leftChar = s[left];
            freq.set(leftChar, freq.get(leftChar) - 1);
            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};

const s = "bcbbbcba"
console.log(maximumLengthSubstring(s))