/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        let ch = strs[0][i];
        for (let j = 0; j < strs.length; j++) {
            if (ch !== strs[j][i]) {
                return prefix
            }else{
                ch = strs[j][i];
            }
        }
        prefix += ch
        ch = ""
    }
    return prefix
};

const strs = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs))