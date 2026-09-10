/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let map = new Map()
    for (const element of s) {
        if (!map.has(element)) {
            map.set(element, 0)
        }
        map.set(element, (map.get(element) || 0) + 1)
    }
    const arr = [...map.entries()].sort((a, b) => b[1] - a[1])
    return arr.map(([key, frequency]) => key.repeat(frequency)).join("");
};

const s = "tree"
console.log(frequencySort(s))