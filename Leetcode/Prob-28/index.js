/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let res = haystack.indexOf(needle)
    return res
};

const haystack = "sadbutsad", needle = "sad"
console.log(strStr(haystack,needle))