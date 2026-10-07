/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
 if(k === 0 || s.length === 1) return s;
    let res = '';
    for (let i = 0; i < s.length; i++) {
        const n = (i + k) % s.length;
        res += s[n];
    }
    return res;
};

const s = "YOOO", k = 4
console.log(getEncryptedString(s,k))