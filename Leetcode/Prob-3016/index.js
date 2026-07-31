/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    const map = new Map();
    let str = ""

    for (const element of word) {
        if (map.has(element)) {
            map.set(element, (map.get(element) + 1 || 1))
        } else {
            map.set(element, 1)
            str += element
        }
    }

    const chars = str.split("");
    chars.sort((a, b) => map.get(b) - map.get(a));
    let result = 0;
    let cost = 1;
    let key = 2;
    for (let i = 0; i < chars.length; i++) {
        if (key > 9) {
            cost++;
            key = 2;
        }
        result += map.get(chars[i]) * cost;
        key++;
    }
    return result;
};

const word = "xyzxyzxyzxyz"
console.log(minimumPushes(word))